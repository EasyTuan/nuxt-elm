import request from '../utils/request';

const prefix = '/common';

export const getHomeData = (params) => {
  return request({
    url: `${prefix}/getHomeData`,
    method: 'GET',
    data: params,
  })
}
