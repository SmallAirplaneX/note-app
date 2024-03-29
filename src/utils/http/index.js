import axios from 'axios';

const baseURL = import.meta.env.PROD ? 'https://server.wangxiaomei.top/api' : 'http://localhost:8080/api';

export const request = axios.create({
    baseURL: baseURL,
    timeout: 1000,
});


request.interceptors.response.use(
    (res)=>{
        //如果请求方式是get，则返回数据为res.data，否则返回res.data.data
        if (res.config.method === 'post') {
            let type = 'error';
            console.log(res.data.code % 10)
            //res.data.code各位为0、1、2、3时，type依次分别为error、success、warning、info
            switch (res.data.code % 10) {
                case 0:
                    type = 'error';
                    break;
                case 1:
                    type = 'success';
                    break;
                case 2:
                    type = 'warning';
                    break;
            }
            ElMessage({
                type: type,
                message: res.data.message
            })
        }
        return res
    },
    (error)=>{
        return Promise.reject(error);
    }
)