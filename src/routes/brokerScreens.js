import Welcome from 'src/screens/Welcome'
import Home from 'src/screens/Tab/Home'
import EnableLocation from 'src/screens/EnableLocation'
import AddListing from 'src/screens/AddListing'
import UserAccountSettings from 'src/screens/UserAccountSettings'
import BrokerProperties from 'src/screens/BrokerProperties'
import PropertyProfile from 'src/screens/PropertyProfile'

export default [
	{
		name: 'Welcome',
		component: Welcome,
		options: {
			headerShown: false
		}
	}, {
		name: 'Home',
		component: Home,
		options: {
			headerShown: false
		}
	}, {
		name: 'EnableLocation',
		component: EnableLocation,
		options: {
			headerShown: false
		}
	}, {
		name: 'AddListing',
		component: AddListing,
		options: {
			headerShown: false
		}
	}, {
		name: 'UserAccountSettings',
		component: UserAccountSettings,
		options: {
			headerShown: false
		}
	}, {
		name: 'BrokerProperties',
		component: BrokerProperties,
		options: {
			headerShown: false
		}
	}, {
		name: 'PropertyProfile',
		component: PropertyProfile,
		options: {
			headerShown: false
		}
	}
]