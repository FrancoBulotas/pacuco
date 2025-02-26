
import api from './api';
const baseUrl = `/api/products`;

const getSearch = async (params) => {
    
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
            type: params.type
        }
    });
    return response.data;
}

export default { getSearch }