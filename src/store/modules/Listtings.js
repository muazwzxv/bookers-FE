// import { getAll, getById, postLisings } from '../../api/Listings-api'

const listing = {
	state: {
		listing_id: '',
		title: '',
		delivery_type: '',
		contact: '',
		status: '',
		price: '',
		created: ''
	},

	mutation: {
		SET_LISTING_ID: (state, id) => {
			state.listing_id = id
		},

		SET_TITLE: (state, title) => {
			state.title = title
		},

		SET_DELIVERY_TYPE: (state, delivery) => {
			state.delivery_type = delivery
		}
	}
}

export default listing