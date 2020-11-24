import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Muaz from './components/muaz.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/muaz',
			name: 'muaz',
			component: Muaz
		}
	],
})
