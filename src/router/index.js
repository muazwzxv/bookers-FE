import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../components/signup/Signup.vue'
import Layout from '../components/Layout.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home
			},
			{
				path: 'signup',
				name: 'signup',
				component: Signup
			},
		]
	},
]

const router = new VueRouter({
	routes
})

export default router
