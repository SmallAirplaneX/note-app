// 引入 Axios
import axios from 'axios';
import { useDialog, useMessage } from 'naive-ui'

const message = useMessage()

// 假设你的API地址是 http://your-domain/api/addAbstractEntry
const baseURL = "http://localhost:4000/api";

// 假设entry参数是一个包含中文的字符串
const entry = "你好，世界！";

// 使用 Axios 发送POST请求
const serviceAxios = axios.create({
    baseURL: baseURL,
    timeout: 1000,
  //   headers: {
  //     'Content-Type': 'application/json'
  // }
  });


  // serviceAxios.interceptors.response.use(function (response) {
  //   // 2xx 范围内的状态码都会触发该函数。
  //   // 对响应数据做点什么
  //   return response;
  // }, function (error) {
  //   // 超出 2xx 范围的状态码都会触发该函数。
  //   // 对响应错误做点什么
  //   return Promise.reject(error);
  // });

  // serviceAxios.interceptors.request.use(function (config) {
  //   // 在发送请求之前做些什么
  //   return config;
  // }, function (error) {
  //   // 对请求错误做些什么


    
  //   return Promise.reject(error);
  // });


export default serviceAxios;