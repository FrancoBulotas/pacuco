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
    const totalPrice = item.price
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
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
