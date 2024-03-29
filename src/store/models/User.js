import AsyncStorage from '@react-native-community/async-storage'
import { applySnapshot, flow, types } from 'mobx-state-tree'

export const User = types
	.model('User', {
		access_token: types.maybeNull(types.string),
		expires_at: types.maybeNull(types.string),
		loading: true,
		loggedIn: types.maybeNull(types.boolean),
		data: types.maybeNull(
			types.model({
				id: types.maybeNull(types.number),
				firstname: types.maybeNull(types.string),
				middlename: types.maybeNull(types.string),
				lastname: types.maybeNull(types.string),
				type_id: types.maybeNull(types.number),
				email: types.maybeNull(types.string),
				contact_number: types.maybeNull(types.number),
				address: types.maybeNull(types.string),
				lat: types.maybeNull(types.union(types.number, types.string)),
				lon: types.maybeNull(types.union(types.number, types.string)),
				device_id: types.maybeNull(types.string),
				profile_img: types.maybeNull(types.string),
				broker_details: types.maybeNull(
					types.model({
						id_status: types.maybeNull(types.string),
						expiration_date: types.maybeNull(types.string),
						prc_id: types.maybeNull(types.string),
						subscription: types.maybeNull(
							types.model({
								id: types.maybeNull(types.number),
								name: types.maybeNull(types.string),
								no_of_listing: types.maybeNull(types.number),
								photos_per_listing: types.maybeNull(types.number)
							})
						)
					})
				)
			})
		)
	})
	.actions( self => ({
		setUser: (user) => {
			self.access_token = user.access_token
			self.expires_at = user.expires_at
			self.data = user.data
		},
		setData: (data) => {
			self.data = data
		},
		setToken: (user) => {
			self.access_token = user.access_token
			self.expires_at = user.expires_at
		},
		login: () => {
			self.loggedIn = true
		},
		logout: () => {
			const initialSnapshot = {
				access_token: null,
				expires_at: null,
				loading: false,
				data: null,
				loggedIn: false
			}
			applySnapshot(self, initialSnapshot)
		},
		update: (data) => {
			self.data = Object.assign({}, self.data, data)
		},
		hydrate: flow(function*() {
			const data = yield AsyncStorage.getItem('User')
			if (data) {
				const userInfo = {
					...JSON.parse(data),
					loading: false
				}
				applySnapshot(self, userInfo)
			} else {
				const userInfo = {
					...self,
					loading: false
				}
				applySnapshot(self, userInfo)
			}
		}),
	}))