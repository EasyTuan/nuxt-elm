import request from '../utils/request';

const prefix = '/user';

//登录
export const loginApi = (params)=> {
  return request({
    url: `${prefix}/login`,
    method: 'POST',
    data: params,
  })
}

//修改昵称
export const retsetName = (params)=> {
  return request({
    url: `${prefix}/retsetName`,
    method: 'POST',
    data: params,
  })
}

//修改密码
export const retsetPassword = (params)=> {
  return request({
    url: `${prefix}/retsetPassword`,
    method: 'POST',
    data: params,
  })
}
