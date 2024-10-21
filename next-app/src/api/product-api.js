import {
    get,
    post,
    put,
    remove
} from "../app/HttpClient";

import { PRODUCT_ROUTES } from "../app/AppRoutes";

export async function fetchAllProducts(page, limit) {
    const skip = page * limit;
    const response = await get(`${PRODUCT_ROUTES.GET_ALL_PRODUCTS}?limit=${limit}&skip=${skip}`);
    return response.data;
}

export async function fetchProductById(id) {
    const response = await get(`${PRODUCT_ROUTES.GET_PRODUCT}${id}`);
    return response.data ?? null
}
