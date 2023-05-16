import { apiConfig } from "./apiServices"

const url = '/shop-service';
const shopUrl = '/shop';

export const getShopServices = async() => {
    const response = await apiConfig.get(url);
    
    return response;
}

export const getShopList = async() => {
    const response = await apiConfig.get(shopUrl);

    return response;
}