import axios from "axios";

const Api = axios.create({
    //   baseURL: "http://localhost/LARAVEL_BEGINING/PROJECT-HMS-SHAAN/public/api",
    baseURL: import.meta.env.VITE_API_BASE_URL
});

export default Api;