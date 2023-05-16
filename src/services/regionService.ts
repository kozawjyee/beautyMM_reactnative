import { apiConfig } from "./apiServices"

const url = '/region';

export const getRegionList = async() => {
    const response = await apiConfig.get(url);

    return response;
}