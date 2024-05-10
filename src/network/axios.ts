import axios, {AxiosResponse} from "axios";
import useSystemStore from "@/store/useSystemStore";
import {TData} from "@/types/common";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    },
});

const request = (url: string, method: "GET" | "POST" | "PUT" | "DELETE", data?: Record<string, any>, authorization: boolean = true) => {
    if (authorization) {
        const systemStore = useSystemStore();
        const token = systemStore.getToken();
        if (token) {
            axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
        } else {
            console.log("No token when request interface: ", url);
        }
    } else {
        delete axiosInstance.defaults.headers["Authorization"];
    }
    return axiosInstance({
        url,
        method,
        data,
    });
};

axiosInstance.interceptors.response.use((response) => 
    // Todo: handle response
     response
);

const get = (url: string, params?: Record<string, any>, authorization: boolean = true): Promise<TData<any>> => new Promise((resolve, reject) => {
    request(url, "GET", params, authorization).then((response: AxiosResponse<TData<any>>) => {
        resolve(response.data);
    }).catch((error) => {
        reject(error);
    });
});

const post = (url: string, data?: Record<string, any>, authorization: boolean = true):Promise<TData<any>> => new Promise((resolve, reject) => {
    request(url, "POST", data, authorization).then((response: AxiosResponse<TData<any>>) => {
        console.log("post response", response.data);
        resolve(response.data);
    }).catch((error) => {
        reject(error);
    });
});

const put = (url: string, data?: Record<string, any>, authorization: boolean = true):Promise<TData<any>> => new Promise((resolve, reject) => {
    request(url, "PUT", data, authorization).then((response: AxiosResponse<TData<any>>) => {
        resolve(response.data);
    }).catch((error) => {
        reject(error);
    });
});

const del = (url: string, data?: Record<string, any>, authorization: boolean = true):Promise<TData<any>> => new Promise((resolve, reject) => {
    request(url, "DELETE", data, authorization).then((response: AxiosResponse<TData<any>>) => {
        resolve(response.data);
    }).catch((error) => {
        reject(error);
    });
});

const useRequest = () => ({
    get, post, put, delete: del
});


export {useRequest};
export default axiosInstance;
