import request from '../utils/request';

const prefix = '/user';

// 登录
export const loginApi = (params) => {
  return request({
    url: `${prefix}/login`,
    method: 'POST',
    data: params,
  })
}

// 修改昵称
export const retsetName = (params) => {
  return request({
    url: `${prefix}/retsetName`,
    method: 'POST',
    data: params,
  })
}

// 修改密码
export const retsetPassword = (params) => {
  return request({
    url: `${prefix}/retsetPassword`,
    method: 'POST',
    data: params,
  })
}

// 获取用户地址列表
export const getAddress = (params) => {
  return request({
    url: `${prefix}/getAddress`,
    method: 'GET',
    data: params,
  })
}

// 获取用户地址
export const getAddAddressById = (params) => {
  return request({
    url: `${prefix}/getAddAddressById`,
    method: 'GET',
    data: params,
  })
}

// 添加用户地址
export const addAddress = (params) => {
  return request({
    url: `${prefix}/addAddress`,
    method: 'POST',
    data: params,
  })
}

// 删除用户地址
export const deleteAddress = (params) => {
  return request({
    url: `${prefix}/deleteAddress`,
    method: 'DELETE',
    data: params,
  })
}
