import request from '../utils/request';

const prefix = '/shopping';

export const restaurants = (params)=> {
  return request({
    url: `${prefix}/restaurants`,
    method: 'GET',
    data: params,
  })
}
