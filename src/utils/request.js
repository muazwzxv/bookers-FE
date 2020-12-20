import axios from 'axios'
import store from '../store'
import { getToken } from '../utils/auth'

const service = axios.create({
	baseURL: 'http://localhost:8000/api',
	timeout: 50000
})

service.interceptors.request.use(
	config => {
		if (store.getters.token) {
			config.headers['Authorization'] = 'Bearer ' + getToken()
		}
		return config
	},
	error => {
		console.log(error)
		Promise.reject(error)
	}
)

export default service