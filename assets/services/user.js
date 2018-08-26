import request from '../utils/request';

const prefix = '/user';

export const loginApi = (params)=> {
  return request({
    url: `${prefix}/login`,
    method: 'POST',
    data: params,
  })
}
