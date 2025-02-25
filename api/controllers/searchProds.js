
const searchProdsRouter = require('express').Router()
//const mongoose = require('mongoose');
const Guardapolvo = require('../models/guardapolvo');
const { ObjectId } = require('mongodb');

searchProdsRouter.get('/products', async (req, res) => {
    const { name, minPrice, maxPrice, size, sortByPrice, table, all, description, stockAvailable, id, category, type } = req.query;
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