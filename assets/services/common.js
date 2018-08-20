import request from '../utils/request';

const prefix = '/common';

export const homeData = (params)=> {
  return request({
    url: `${prefix}/homeData`,
    method: 'GET',
    data: params,
  })
}
