import axios from 'axios';
import config from '../config';
import Cookies from 'js-cookie';
import Tool from './tool';
import { Toast } from '@f2e/mext-antd';

const reqData = {};

let reqConfig = {
  isToast: true, // 接口错误是否弹出toast
};

function getBaseURL(options, is_wx) {
  let baseURL;
  if (is_wx) {
    baseURL = config.WX_URL;
  } else if (options.config && options.config.type === 'CSB') {
    baseURL = config.API_CSB_URL;
  } else {
    baseURL = config.API_URL;
  }
  return baseURL;
}

const request = (options = { method: 'GET' }, is_wx) => {
  options.data = Object.assign({}, options.data, reqData);
  reqConfig = Object.assign({}, reqConfig, options.config);
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
      options.data,
    );
  }
  return axios({
    method: options.method,
    baseURL: getBaseURL(options, is_wx),
    url: options.url,
    data: isdata ? options.data : null,
    params: !isdata ? options.data : null,
    withCredentials: !!is_wx,
    timeout: config.TIMEOUT,
    headers: config.HEADERS,
  });
};

const erroCodeState = (res) => {
  if (res.data && res.data.status != 'ok' && res.data.error) {
    // token超时状态 和 单点登录状态 access_token 超时 从新触发登录
    if (res.data.error.code == '11008' || res.data.error.code == '10001') {
      // token 失效登录
      // 需要在页面单独处理
      if (global.platform == 'app') {
        const data = { type: 'login' };
        setTimeout(() => {
          if (Tool.webViewType() == 'android') {
            appFunction.useAndroidFunction(data);
          } else {
            appFunction.useIosFunction(data);
          }
        }, 100);
        return false;
      }
      window.location.href = `${window.location.origin}/login.html`;
      return false;
    } if (reqConfig.isToast) {
      Toast.info(`${res.data.error.message}~` || res.data.error.code, 1.5);
    }
  }
};

export default async (options, is_wx = false, params = false) => {
  if (params) {
    Object.keys(params).forEach((key) => {
      reqData[key] = params[key];
    });
    return;
  }

  const query = Cookies.getJSON('query');
  const access_token = Cookies.getJSON('access_token') || '';

  if (options.url == '/user/login') {
    options.data.query = query;
  } else if (options.config && options.config.noToken) {
    // pass
  } else {
    options.data.access_token = access_token && access_token.access_token;
  }

  const res = await request(options, is_wx);
  if (res.status >= 200 && res.status < 300) {
    if (config.debug) {
      console.log(
        `${new Date().toLocaleString()}【M=${options.url}】【接口响应：】`,
        res.data,
      );
    }
    erroCodeState(res);
    return res.data;
  }
  Toast.offline(res.statusText);
  throw new Error(res.statusText);
};
