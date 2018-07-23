import http from './api'

export const getIndex = params =>{
   return http.fetchGet('/index',params);
}

export const getOrder = params =>{
    return http.fetchGet('/order',params);
 }