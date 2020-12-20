import cookie from 'js-cookie'

const token = 'vue-bookers-token'

export function getToken() {
	return cookie.get(token)
}

export function setToken(newToken) {
	return cookie.set(token, newToken)
}

export function removeToken() {
	return cookie.remove(token)
}