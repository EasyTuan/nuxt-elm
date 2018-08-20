import axios from 'axios';
import config from '~/config';
import { Toast } from 'mint-ui';


const request = (options = { method: 'GET' }) => {
  let isdata = true;
  if (
    options.method.toUpperCase() !== 'POST'
    && options.method.toUpperCase() !== 'PUT'
    && options.method.toUpperCase() !== 'PATCH'
  ) {
    isdata = false;
  }
  if (!config.IS_RELEASE) {
    console.log(
      `${new Date().toLocaleString()}【M=${options.url}】P=`,
      options.data || null,
    );
  }
  return axios({
    method: options.method,
    baseURL: config.BASE_URL,
    url: options.url,
    data: isdata ? options.data : null,
    params: !isdata ? options.data : null,
    timeout: config.TIMEOUT,
    headers: config.HEADERS,
  });
};

export default async (options) => {
  const res = await request(options);
  if (res.status >= 200 && res.status < 300) {
    if (!config.IS_RELEASE) {
      console.log(
        `${new Date().toLocaleString()}【M=${options.url}】【接口响应：】`,
        res.data,
      );
    }
    return res.data;
  }
  Toast(res.statusText);
  throw new Error(res.statusText);
};
