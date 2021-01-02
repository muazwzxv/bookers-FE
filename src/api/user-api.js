import request from '../utils/request'

export function login(email, password) {
	return request({
		url: '/login',
		method: 'post',
		data: {
			email,
			password
		}
	})
}

export function register(data) {
	return request({
		url: '/register',
		method: 'post',
		data,
	})
}

export function me() {
	return request({
		url: '/me',
		method: 'get',
	})
}

export function update(id, data) {
	return request({
		url: `/user/${id}`,
		method: 'patch',
		data,
	})
}