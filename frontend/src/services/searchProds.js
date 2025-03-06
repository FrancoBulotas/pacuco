
import api from './api';
const baseUrl = `/api/products`;

const getSearch = async (params) => {
    // console.log(params)
    const response = await api.get(baseUrl, {
        params: {
            name: params.name,
            minPrice: params.minPrice,
            maxPrice: params.maxPrice,
            size: params.size,
            sortByPrice: params.sortByPrice,
            table: params.table,
            description: params.description,
            id: params.id,
            all: params.all,
            category: params.category,
            type: params.type,
            withStock: params.withStock,
            withDiscount: params.withDiscount,
            onDisplay: params.onDisplay
        }
    });
    return response.data;
}

const clearCache = async () => {
    const response = await api.post(baseUrl + '/clearCache');
    console.log(response);
    return response;
}

export default { getSearch, clearCache }