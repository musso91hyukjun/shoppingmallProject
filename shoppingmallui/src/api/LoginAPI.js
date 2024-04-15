import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: "http://localhost:9999"
    }
)

export const signup =
    (formData) => apiClient.post(`/signup`, formData);

export const login = async (credentials) => {
    try {
        const response = await apiClient.post('/login', credentials);

        const csrfToken = response.data.csrfToken;

        localStorage.setItem('csrfToken', csrfToken);
        return response;
    } catch (error) {
        throw error;
    }
}
