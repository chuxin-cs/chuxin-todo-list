import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';

// 创建 axios 实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:9000/api', // 你的 API 基础 URL
  timeout: 5000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么，例如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    // 这里可以根据后端返回的状态码进行统一处理
    if (res.code !== 200) {
      message.error(res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err' + error); // for debug
    message.error(error.message);
    return Promise.reject(error);
  }
);

// 封装 get 请求
export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return service.get(url, config).then((res) => res.data);
};

// 封装 post 请求
export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return service.post(url, data, config).then((res) => res.data);
};

// 封装 delete 请求
export const del = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return service.delete(url, config).then((res) => res.data);
};

// 封装 put 请求
export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
  return service.put(url, data, config).then((res) => res.data);
};

export default service;