import request from '../utils/request';

const prefix = '/shopping';

export const restaurants = (params) => {
  return request({
    url: `${prefix}/restaurants`,
    method: 'GET',
    data: params,
  })
}

export const seller = (params) => {
  return request({
    url: `${prefix}/seller`,
    method: 'GET',
    data: params,
  })
}
export const goods = (params) => {
  return request({
    url: `${prefix}/goods`,
    method: 'GET',
    data: params,
  })
}
export const ratings = (params) => {
  return request({
    url: `${prefix}/ratings`,
    method: 'GET',
    data: params,
  })
}
