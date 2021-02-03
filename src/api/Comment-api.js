
import request from '../utils/request'

export function PostComment(data) {
  return request({
    url: '/comments',
    method: 'post',
    data
  })
}

export function GetComments() {
  return request({
    url: '/comments',
    method: 'get',
  })
}

export function GetCommentsById(id) {
  return request({
    url : `/comments/${id}`,
    method: 'get'
  })
}

export function DeleteComments(id) {
  return request({
    url: `/comments/${id}`,
    method: 'delete'
  })
}

export function GetCommentAndRelations() {
  return request({
    url : `/comments/ref`,
    method: 'get'
  })
}