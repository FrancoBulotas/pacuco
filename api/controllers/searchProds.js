
const searchProdsRouter = require('express').Router()
const Guardapolvo = require('../models/guardapolvo');
const { ObjectId } = require('mongodb');
const NodeCache = require('node-cache');

const cache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

searchProdsRouter.post('/products/clearCache', (req, res) => {
    cache.flushAll(); // Borra toda la caché
    console.log("🗑 Caché eliminada");
    res.json({ message: "Cache cleared" });
})

searchProdsRouter.get('/products', async (req, res) => {
    const cacheKey = `products:${JSON.stringify(req.query)}`; // Clave única basada en los parámetros de la URL
    let cachedProducts = cache.get(cacheKey);

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

      if (!cachedProducts) {
          console.log(`⚡ No hay caché para: ${cacheKey}, obteniendo datos de la BD...`);
          
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
          cachedProducts = products.map(product => {
            return {
              ...product,
              id: product._id.toString(),
              _id: undefined, 
              __v: undefined  
            };
          });

          cache.set(cacheKey, cachedProducts); // Guarda en caché
      } else {
          console.log(`Usando ${cacheKey} desde caché...`);
      }
      
      res.json(cachedProducts);
    } catch (error) {
      res.status(500).send('Error al buscar productos');
    }
});

module.exports = searchProdsRouter;