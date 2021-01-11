import request from '../utils/request'

export function PostTopic(data) {
  return request({
    url: '/topic',
    method: 'post',
    data,
  })
}

export function GetTopic() {
  return request({
    url: '/topic',
    method: 'get',
  })
}

export function GetTopicById(id) {
  return request({
    url: `/topic/${id}`,
    method: 'get'
  })
}