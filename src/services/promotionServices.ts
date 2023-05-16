import { apiConfig } from "./apiServices"

const url = '/promotion-service'

export const getPromotionServices = async() => {
    const response = await apiConfig.get(url);
    return response;
}