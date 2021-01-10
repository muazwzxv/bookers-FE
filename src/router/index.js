import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '../views/login/Signup.vue'
import Login from '../views/login/Login.vue'
import Layout from '../components/Layout.vue'
import Profile from '../views/user/Profile.vue'
import Home from '../views/Home.vue'
import Listings from '../views/listing/Listings.vue'
import Admin from '../views/Admin.vue'
import Forum from '../views/forum/Forum.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Auth',
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
		],
	},
	{
		path: '/',
		name: 'Home',
		component: Home,
		children: [
			{
				path: 'profile',
				name: 'profile',
				component: Profile
			},
			{
				path: 'listings',
				name: 'listings',
				component: Listings
			},
			{
				path: 'forum',
				name: 'forum',
				component: Forum
			},
		]
	},
	{
		path: '/admin',
		name: 'Admin',
		component: Admin,
	}
]

const router = new VueRouter({
	routes
})

export default router
