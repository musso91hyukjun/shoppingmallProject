import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: "http://localhost:9999"
    }
)

export const signup =
    (formData) => apiClient.post(`/signup`, formData);
