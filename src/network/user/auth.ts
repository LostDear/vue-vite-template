import {useRequest} from "@/network/axios";
import {TData} from "@/types/common";
import {IAuthInfo} from "@/types/user/auth";

export const hello = ():Promise<TData<string>> =>
    useRequest().get("/user/auth/hello", {}, false);

export const refreshToken = (refreshToken: string):Promise<TData<IAuthInfo>> =>
    useRequest().post("/user/auth/refresh", {refreshToken}, false);
