import axios from 'axios';
import {TIMEOUT, ERRORCODE, PREFIX} from '../config/request';
import qs from 'qs';
const api = axios.create({
  timeout: TIMEOUT,
  baseURL: PREFIX,
  withCredentials: true,
  responseType: 'json'
});
api.defaults.transformRequest = [function (data) {
  if (data === 'string') {
    return data;
  }
  return qs.stringify(data);
}];
const responseFn  =(result) => {
  if (result&& result.data && result.data.success) {
    return result.data.data;
  }
  return null;
};
export function createApi() {
  return {
    get(url, param, config) {
      return api.get(`${url}?${qs.stringify(param)}`, config).then(responseFn);
    },
    post(url, param, config) {
      return api.post(url, param, config).then(responseFn);
    }  
  };
}