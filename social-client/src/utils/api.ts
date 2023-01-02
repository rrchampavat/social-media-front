import axios from "axios";
import Cookies from "js-cookie";

let store: { getState: () => { (): any; new (): any; AuthReducer: null } };

export const injectStore = (_store: any) => {
  store = _store;
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  const auth: any = store.getState()?.AuthReducer || null;
  const cookie = Cookies.get("accessToken");

  if (auth) {
    config.headers["authorization"] = "Bearer " + cookie;
  }

  if (config?.urlParams && typeof config?.url?.replace === "function") {
    Object.entries(config.urlParams || {}).forEach(([key, value]) => {
      config.url = config.url.replace(`:${key}`, value); // encodeURIComponent()
    });
  }
  return config;
});
