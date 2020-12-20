import { login, register } from '../../api/user-api'
import { getToken, setToken, removeToken } from '../../utils/auth'

const user = {
	state: {
		user_id: '',
		token: getToken(),
		name: '',
		email: '',
		role: ''
	},

	mutation: {
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
						const { access_token } = res.data.data
						setToken(access_token)
						commit('SET_TOKEN', access_token)
						resolve(res.data.data)
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
						const { access_token } = res.data.data
						setToken(access_token)
						resolve(res)
					})
					.catch(err => {
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