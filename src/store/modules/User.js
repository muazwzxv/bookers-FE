import { login, me, register } from '../../api/user-api'
import { getToken, setToken, removeToken } from '../../utils/auth'

const user = {

	state: {
		user_id: '',
		token: getToken(),
		name: '',
		email: '',
		role: ''
	},

	mutations: {
		ADD_CAPABILITIES: (state, data) => {
			state.capabilities.push(data)
		},

		SET_USER_ID: (state, id) => {
			state.user_id = id
		},

		SET_TOKEN: (state, token) => {
			state.token = token
		},

		SET_NAME: (state, name) => {
			state.name = name
		},

		SET_EMAIL: (state, email) => {
			state.email = email
		},

		SET_ROLE: (state, role) => {
			state.role = role
		}
	},

	actions: {
		login({ commit }, user) {
			const email = user.email.trim()
			return new Promise((resolve, reject) => {
				login(email, user.password)
					.then(res => {
						const { access_token } = res.data
						const { id, name, email, role } = res.data.user
						removeToken()
						setToken(access_token)
						commit('SET_USER_ID', id)
						commit('SET_TOKEN', access_token)
						commit('SET_NAME', name)
						commit('SET_EMAIL', email)
						commit('SET_ROLE', role)
						resolve(res.data)
					})
					.catch(err => {
						console.log(err)
						reject(err)
					})
			})
		},

		register(_, user) {
			return new Promise((resolve, reject) => {
				register(user)
					.then(res => {
						const { access_token } = res.data
						setToken(access_token)
						resolve(res)
					})
					.catch(err => {
						reject(err)
					})
			})
		},

		getInfo({ commit }) {
			return new Promise((resolve, reject) => {
				me().then(res => {
					const { id, name, email, role } = res.data.user
					commit('SET_USER_ID', id)
					commit('SET_NAME', name)
					commit('SET_EMAIL', email)
					commit('SET_ROLE', role)
					resolve(res.data.user)
				}).catch(err => {
					reject(err)
				})
			})
		},

		logout({ commit }) {
			return new Promise(resolve => {
				commit('SET_USER_ID', '')
				commit('SET_TOKEN', '')
				commit('SET_NAME', '')
				commit('SET_EMAIL', '')
				commit('SET_ROLE', '')
				removeToken()
				resolve()
			})
		}
	}
}

export default user