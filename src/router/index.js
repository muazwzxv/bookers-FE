import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../components/signup/Signup.vue'
import Login from '../components/login/Login.vue'
import Layout from '../components/Layout.vue'
import Profile from '../components/user/Profile.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		children: [
			{
				path: '/',
				name: 'login',
				component: Login
			},
			{
				path: 'signup',
				name: 'signup',
				component: Signup
			},
			{
				path: 'profile',
				name: 'profile',
				component: Profile
			},
		]
	},
]

const router = new VueRouter({
	routes
})

export default router
