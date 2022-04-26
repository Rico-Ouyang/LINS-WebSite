import axios from 'axios'
import { Message } from 'element-ui';
import router from "../router"

// 相应拦截器
axios.interceptors.response.use(success => {
    // 业务逻辑错误
    if (success.status && success.status == 200) {

        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403) {
            Message.error({ message: success.data.message });
            return;
        }
        if (success.data.message) {
            Message.success({ message: success.data.message })
        }
    }
    return success.data;
}, error => {
    if (error.response.code == 504 || error.response.code == 404) {
        Message.error({ message: "服务器被吃" })
    } else if (error.response.code == 403) {
        Message.error({ message: "权限不足，联系管理员" })
    } else if (error.response.code == 401) {
        Message.error({ message: "尚未登陆，请登录" });
        router.replace({ location: '/' })
    } else {
        if (error.response.data.message) {
            Message.error({ message: error.response.data.message })
        } else {
            Message.error({ message: '未知错误' })
        }
    }
    return;
});

/* let base = 'https://d30570a4-e779-4471-9b69-e15e29546b75.mock.pstmn.io'; */
let base = 'http://124.220.22.99:8098';
// let base = '';
// 传送json格式的post请求
export const postRequest = (url, params) => {

    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
    })
}
// 传送json的put请求
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params,
    })
}
// 传送json的put请求
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params,
    })
}
// 传送json的put请求
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        data: params,
    })
}