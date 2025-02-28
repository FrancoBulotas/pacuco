
const searchProdsRouter = require('express').Router()
//const mongoose = require('mongoose');
const Guardapolvo = require('../models/guardapolvo');
const { ObjectId } = require('mongodb');

searchProdsRouter.get('/products', async (req, res) => {
    const { name, minPrice, maxPrice, size, sortByPrice, table, all, description, stockAvailable, id, category, type, withStock, withDiscount, onDisplay } = req.query;
    const filters = {};
  
    if (all) {
      //filters.category = "guardapolvo"; // Mostrar solo los productos con type="guardapolvo"
    }

    if (name) {
        filters.name = { $regex: new RegExp(name, 'i') };
    }
    if (minPrice) {
        filters.price = { ...filters.price, $gte: Number(minPrice) };
    }
    if (maxPrice) {
        filters.price = { ...filters.price, $lte: Number(maxPrice) };
    }
    if (size) {
        filters.size = size;
    }
    if (table) {
        filters.table = table;
    }
    if (category) {
      filters.category = category;
    }
    if (type) {
      filters.type = type;
    }
    if (description) {
        filters.description = {};
        if (description.includes('base')) filters.description.base = description.split('_')[1];
        if (description.includes('detalle')) filters.description.detalle = description.split('_')[1];
        if (description.includes('vivos')) filters.description.vivos = description.split('_')[1];
        if (description.includes('bolsillos')) filters.description.bolsillos = description.split('_')[1];
    }
    if (stockAvailable) {
        filters.stockAvailable = { $gt: 0 };
    }
    if (id) {
        try {
            filters._id = new ObjectId(id);
        } catch (error) {
            return res.status(400).json({ error: 'ID inválido' });
        }
    }
    
    // New filter for withStock
    if (withStock !== null && withStock !== undefined) {
      if (withStock === 'true') {
          filters.amount = { $gt: 0 };
      } else if (withStock === 'false') {
          filters.amount = { $eq: 0 };
      }
    }
    
    if (withDiscount !== null && withDiscount !== undefined) {
      if (withDiscount === 'true') {
          filters.discountPrice = { $ne: null, $exists: true, $gt: 0 };
      } else if (withDiscount === 'false') {
          filters.$or = [
              { discountPrice: null },
              { discountPrice: { $exists: false } },
              { discountPrice: 0 }
          ];
      }
  }
    
    // New filter for onDisplay
    if (onDisplay !== null && onDisplay !== undefined) {
        if (onDisplay === 'true') {
            filters.show = true;
        } else if (onDisplay === 'false') {
            filters.show = false;
        }
    }

    try {
      const sortOrder = sortByPrice === 'desc' ? -1 : 1;

      const products = await Guardapolvo.aggregate([
        { $match: filters },
        {
          $addFields: {
            effectivePrice: {
              $cond: {
                if: { $gt: ['$discountPrice', 0] },
                then: '$discountPrice',
                else: '$price'
              }
            }
          }
        },
        { $sort: { effectivePrice: sortOrder } }
      ]);
      
      // Aplicar transformación manual para cada producto
      const transformedProducts = products.map(product => {
        return {
          ...product,
          id: product._id.toString(),
          _id: undefined, // O puedes usar delete product._id;
          __v: undefined  // O puedes usar delete product.__v;
        };
      });

      res.json(transformedProducts);
    } catch (error) {
      res.status(500).send('Error al buscar productos');
    }
});

module.exports = searchProdsRouter;