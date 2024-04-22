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

        if (response.status === 200) {
            const csrfToken = response.headers["x-xsrf-token"];
            if (csrfToken) {
                sessionStorage.setItem("csrfToken", csrfToken)
            }
            sessionStorage.setItem("isLogin", "true");
            return response;
        } else {
            throw new Error('로그인 실패');
        }
    } catch (error) {
        throw error;
    }

}
