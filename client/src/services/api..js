import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const login = (data) => API.post("/auth/login", data);
export const register = (data) => API.post("/auth/register", data);
export const createBug = (data, token) => API.post("/bugs/create", data, { headers: { Authorization: `Bearer ${token}` } });
export const getMyBugs = (token) => API.get("/bugs/mybugs", { headers: { Authorization: `Bearer ${token}` } });