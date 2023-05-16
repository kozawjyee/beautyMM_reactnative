import axios from "axios";
import { API_URL } from "../../config";

export const apiConfig = axios.create({
    baseURL: API_URL
});