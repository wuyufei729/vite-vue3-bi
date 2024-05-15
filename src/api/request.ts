import axios, { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse } from "axios"
import { IResponseData } from "@/types"
import { ElMessage, ElLoading } from "element-plus"
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import store from '@/store/index'
//import { logoutHandler } from '@/hooks/useHandleLoginHook'

type TAxiosOption = {
    baseURL: string;
    timeout: number;
};

const config = {
    baseURL: "/",
    timeout: 120000,
};

let loading: LoadingInstance;

class Http {
    // service: AxiosInstance;
    service;
    constructor(config: TAxiosOption) {
        this.service = axios.create(config);

        /* 请求拦截  this.service.interceptors.request.use(config => config, error => Promise.reject(error))*/
        this.service.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                /* 业务逻辑
                1. 开启全屏loading动画
                2. 数据加密config.data
                3. 请求头加上token，结合vuex或localstorage：
                    if(store.getters.token) config.headers['x-token'] = store.getters.token
                    else 重定向
                4. ……
                */
                loading = ElLoading.service({
                    lock: true,
                    text: "Loading",
                    spinner: "el-icon-loading",
                    background: "rgba(255, 255, 255, 0.7)",
                }); 
               
                if((store.state as any)['auth/user'] && (store.state as any)['auth/user'].v_user){
                    (config.headers as AxiosRequestHeaders).Authorization = (store.state as any)['auth/user'].v_user.token as string
                }

                // if (localStorage.getItem("token")) {
                //     (config.headers as AxiosRequestHeaders).authorization = localStorage.getItem("token") as string
                // }

                return config;
            },
            (error) => {
                /* 请求错误 
                1. 关闭全屏loading动画
                2. 重定向到错误页
                */
                loading.close();
                return Promise.reject(error); // 为了可以在代码中catch到错误信息
            }
        );

        /* 响应拦截   this.service.interceptors.response.use(response => response.data, error => Promise.reject(error))*/
        this.service.interceptors.response.use(
            (response: AxiosResponse<any>) => {
                /* 
                1. 关闭全屏loading动画
                2. 数据解密
                3. 根据 response.data.code 做不同的错误处理
                4. ……
                */
                loading.close();

                const data = response.data;
                const { code } = data;
              
                if (code != 0) {
                    ElMessage.error(data.message);
                    return Promise.reject(data);
                }
                return response.data.data;
            },
            (error) => {
                loading.close();
                ElMessage.error('请求失败:'+error.response.data.message);
                if(error.response.status == 400 || error.response.data.code == 400){
                    //logoutHandler()
                }else{
                    return Promise.reject(error);
                }
            }
        );
    }
    get<T>(
        url: string,
        params?: object,
        _object = {}
    ): Promise<IResponseData<T>> {
        return this.service.get(url, { params, ..._object });
    }
    post<T>(
        url: string,
        params?: object,
        _object = {}
    ): Promise<IResponseData<T>> {
        return this.service.post(url, params, _object);
    }
    put<T>(
        url: string,
        params?: object,
        _object = {}
    ): Promise<IResponseData<T>> {
        return this.service.put(url, params, _object);
    }
    delete<T>(
        url: string,
        params?: any,
        _object = {}
    ): Promise<IResponseData<T>> {
        return this.service.delete(url, { params, ..._object });
    }
}

export default new Http(config);
