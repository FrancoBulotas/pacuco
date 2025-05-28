/**
 * 
 * @param {string} filter 
 * @param {Object} guardapolvo 
 * @returns true si el filtro coincide con el nombre, descripcion, tabla del guardapolvo, o palabra 'guardapolvo', 
 * false si no cumple con dichos requisitos
*/
export const guardapolvosFilter = (filter, guardapolvo) => {
    if (guardapolvo.name.toLowerCase().includes(filter) 
        || guardapolvo.description.general.toLowerCase().includes(filter) 
        || guardapolvo.description.base.toLowerCase().includes(filter) 
        || guardapolvo.description.detalle.toLowerCase().includes(filter) 
        || guardapolvo.description.vivos.toLowerCase().includes(filter) 
        || 'guardapolvo'.includes(filter) 
        || guardapolvo.table.replace('_', ' ').toLowerCase().includes(filter))
    {
        return true
    }
    return false
}

import { useMatch } from 'react-router-dom';
/**
 * 
 * @param {string} path path del producto a buscar
 * @param {List} products lista de productos donde buscar por id
 * @returns el guardapolvo si encuentra una coincidencia o null si no lo encuentra
 */
export const getMatches = (path, products) => {
    const match = useMatch(path)    
    return match ? products.find(prod => prod.id === match.params.id) : null
}


/**
 * Se encarga de verificar si las imagenes fueron descargadas completamente, si lo fueron les
 * agrega la clase 'loaded'
 * @returns nada
 */
export const checkIfImagesAreLoaded = (blurDivs) => {
    blurDivs.forEach(div => {
        const img = document.querySelector('img')
        const loaded = () => div.classList.add('loaded')
        if(img.complete){
            loaded()
        } else {
            img.addEventListener('load', loaded)
        }
    })
}

/**
 * 
 * @param {String} str 
 * @returns true si la string pasada es un numero, false si no lo es
 */
export const isValidNumber = (str) => {
    const num = parseFloat(str);
    return !Number.isNaN(num) && isFinite(num);
}

/**
 * 
 * @param {Object} item producto a evaluar si tiene discountPrice
 * @returns true si el item tiene un descuento aplicado (si es != de undefined, si es > 0 y si es != de '0'), o false si no lo tiene
 */
export const validateIfItemHasDiscount = (item) => {
    return item.discountPrice && (item.discountPrice !== "0" || item.discountPrice > 0)
}

/**
 * 
 * @param {Object} item 
 * @returns retorna el % de descuento que se esta aplicando sobre un producto
 */ 
export const checkDiscountPorcentage = (item) => {
    const totalPrice = item.price;
    const discountPrice = item.discountPrice

    return Math.floor(100 - ((discountPrice * 100) / totalPrice))
}

// parsea las fechas generando un Date() solo con año, mes y dia
export const parseDate = (dateStr) => {
    // Normaliza AM/PM y reemplaza espacios no estándar
    const normalizedDate = dateStr
        .replace(/\s+/g, " ")
        .replace(/ a\. m\./i, "AM")
        .replace(/ p\. m\./i, "PM");

    // Separar la fecha y hora
    const [datePart] = normalizedDate.split(", "); // Solo toma la parte de la fecha (antes de la coma)
    const [day, month, year] = datePart.split("/").map(Number);

    // Crear un nuevo objeto Date con solo año, mes y día
    return new Date(year, month - 1, day); // Mes es 0-indexed en JavaScript
}

// orderna las fechas, si recentFirst es true las mas recientes primero, si es false las mas viejas primero
export const orderByDate = (prods, recentFirst) => {
    if(recentFirst) return prods.sort((a, b) => parseDate(b.time) - parseDate(a.time));
    return prods.sort((a, b) => parseDate(a.time) - parseDate(b.time));
}

// devuelve la tabla que se esta eligiendo, depende de la consulta que se este realizando
export const selectType = (queryParams) => {
    if(queryParams.type){
      return queryParams.type.replace('_', ' ')
    } 
}

export function formatNumber(num) {
    if(!num) return '0';

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

import configsService from '../../services/configs';
import { setConfig } from '../../reducers/configReducer';

export const updateFeaturedProducts = async (featuredLists, updatedProducts, config, dispatch) => {
    const updatedFeaturedLists = {};

    try {
        // Itera sobre cada categoría destacada
        for (const category in featuredLists) {
            if (featuredLists.hasOwnProperty(category)) {
            // Actualiza los productos de esta categoría
            updatedFeaturedLists[category] = featuredLists[category].map((featuredProduct) => {
                const updatedProduct = updatedProducts.find(
                (product) => product.id === featuredProduct.id
                );

                // Si hay un producto actualizado y es diferente, reemplaza el destacado
                if (updatedProduct && JSON.stringify(updatedProduct) !== JSON.stringify(featuredProduct)) {
                    return updatedProduct;
                }

                // Si no hay cambios, mantiene el producto destacado original
                return featuredProduct;
            });
            }
        }

        if(JSON.stringify(featuredLists) !== JSON.stringify(updatedFeaturedLists)){ 
            dispatch(setConfig([{...config, featuredProducts: updatedFeaturedLists}]));
            await configsService.update({...config, featuredProducts: updatedFeaturedLists});
            // await configsService.clearCache();
        }
    } catch(e){
        console.error(e);
    }
}



import { setFiltredGuardapolvos, setStaticFiltredGuardapolvos, setSearchedGuardapolvo } from '../../reducers/guardapolvosReducer';
import searchProdsService from '../../services/searchProds';

export const fetchProducts = async (searchParams, setQueryParams, products, dispatch) => {
    if(searchParams && searchParams.size > 0){
      const params = {};
      searchParams.forEach((value, key) => {
          params[key] = value;
      });
      setQueryParams(params);

      // Si solo tenemos el parámetro 'id', podemos buscar en el estado local
      if (Object.keys(params).length === 1 && params.id) {
        const product = products.find(p => p.id === params.id);
        if (product) {
          console.log('🔍 Usando filtrado local por ID:', params.id);
          dispatch(setFiltredGuardapolvos([product]));
          dispatch(setSearchedGuardapolvo(product));
          return;
        }
      }

      let filteredProducts = [...products];

      // Filtros que podemos aplicar localmente
      if (params.category) {
        filteredProducts = filteredProducts.filter(product => 
          product.category?.toLowerCase() === params.category.toLowerCase()
        );
      }

      if (params.type) {
        filteredProducts = filteredProducts.filter(product => 
          product.type?.toLowerCase() === params.type.toLowerCase().replace('_', ' ')
        );
      }

      if (params.name) {
        filteredProducts = filteredProducts.filter(product => 
          product.name?.toLowerCase().includes(params.name.toLowerCase())
        );
      }

      if (params.minPrice) {
        filteredProducts = filteredProducts.filter(product => 
          product.price >= Number(params.minPrice)
        );
      }

      if (params.maxPrice) {
        filteredProducts = filteredProducts.filter(product => 
          product.price <= Number(params.maxPrice)
        );
      }

      if (params.size) {
        filteredProducts = filteredProducts.filter(product => 
          product.size === params.size
        );
      }

      if (params.table) {
        filteredProducts = filteredProducts.filter(product => 
          product.table === params.table
        );
      }

      if (params.withStock === 'true') {
        filteredProducts = filteredProducts.filter(product => 
          product.amount > 0
        );
      } else if (params.withStock === 'false') {
        filteredProducts = filteredProducts.filter(product => 
          product.amount === 0
        );
      }

      if (params.withDiscount === 'true') {
        filteredProducts = filteredProducts.filter(product => 
          product.discountPrice > 0
        );
      } else if (params.withDiscount === 'false') {
        filteredProducts = filteredProducts.filter(product => 
          !product.discountPrice || product.discountPrice === 0
        );
      }

      if (params.onDisplay === 'true') {
        filteredProducts = filteredProducts.filter(product => 
          product.show === true
        );
      } else if (params.onDisplay === 'false') {
        filteredProducts = filteredProducts.filter(product => 
          product.show === false
        );
      }

      // Si tenemos resultados del filtrado local, los usamos
      if (filteredProducts.length > 0) {
        // Aplicar ordenamiento si se especifica
        if (params.sortByPrice) {
          filteredProducts.sort((a, b) => {
            const priceA = a.discountPrice || a.price;
            const priceB = b.discountPrice || b.price;
            return params.sortByPrice === 'desc' ? priceB - priceA : priceA - priceB;
          });
        }

        // console.log('🔍 Usando filtrado local con parámetros:', params);
        // console.log('📊 Productos encontrados:', filteredProducts.length);
        dispatch(setFiltredGuardapolvos(filteredProducts));
        dispatch(setStaticFiltredGuardapolvos(filteredProducts));
        return;
      }

      // Si no podemos filtrar localmente o no hay resultados, hacemos la request al backend
      // console.log('🌐 Haciendo request al backend con parámetros:', params);
      try {
          const response = await searchProdsService.getSearch(params);
          if(response.length === 1){
            dispatch(setFiltredGuardapolvos(response));
            dispatch(setSearchedGuardapolvo(response[0]));
          }
          else if(response != undefined) {
            dispatch(setFiltredGuardapolvos(response));
            dispatch(setStaticFiltredGuardapolvos(response));
          }
      } catch (err) {
          console.error('❌ Error en la request al backend:', err.message);
      }
    }
  };
