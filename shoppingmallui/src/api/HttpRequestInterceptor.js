import axios from "axios"

export const setInterceptores = () => {
    axios.interceptors.request.use(
        (config) => {
            const csrfToken = sessionStorage.getItem("csrfToken");
            if (csrfToken) {
                config.headers["X-XSRF-TOKEN"] = csrfToken;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    )
}