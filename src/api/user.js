/**
 * 用户相关的请求模块
 */

import request from '@/utils/request'

// 登录或者注册
export const login = data => {
  return request({
    method: 'POST',
    url: '/v1_0/authorizations',
    data
  })
}
