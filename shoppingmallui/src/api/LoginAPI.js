import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: "http://localhost:9999"
    }
)

export const findByUsername
    = (username) => apiClient.get()