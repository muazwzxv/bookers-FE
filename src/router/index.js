import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/login/Signup.vue'
import Login from '../views/login/Login.vue'
import Layout from '../components/Layout.vue'
import Profile from '../views/user/Profile.vue'
import Home from '../views/Home.vue'

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
			{
				path: 'listings',
				name: 'listings',
				component: Home
			},
		]
	},
]

const router = new VueRouter({
	routes
})

export default router
