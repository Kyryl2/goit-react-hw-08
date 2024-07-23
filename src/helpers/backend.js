import axios from "axios";

export const backend = axios.create({
  baseURL: "https://connections-api.goit.global/docs/",
});
export const setToken = (token) => {
  backend.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  backend.defaults.headers.common.Authorization = ``;
};
