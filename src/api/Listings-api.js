import request from '../utils/request'

export function postLisings(data) {
	return request({
		url: '/listings',
		method: 'post',
		data
	})
}

export function getById(id) {
	return request({
		url: `/listings/${id}`,
		method: 'get'
	})
}

export function getAll() {
	return request({
		url: '/listings',
		method: 'get'
	})
}