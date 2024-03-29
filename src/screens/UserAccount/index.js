import React from 'react'
import { get } from 'lodash'
import { Observer } from 'mobx-react'
import Radar from 'react-native-radar'
import { Alert, TouchableOpacity } from 'react-native'
import { UserType } from 'src/constants'
import { Store } from 'src/store'
import {
	Button,
	ButtonContainer,
	ButtonLabel,
	Container,
	ContentContainer,
	UserAddressIcon,
	UserAddressLabel,
	UserAddressWrapper,
	UserImage,
	UserInfoContainer,
	UserNameLabel,
	UserSubscriptionLabel,
	UserSubscriptionWrapper
} from './styledComponents'
import images from './images'

const UserAccount = ({ navigation }) => {

	const { User } = Store

	const UserButton = ({children, ...rest}) => {
		return (
			<Button {...rest}>
				<ButtonLabel>{children}</ButtonLabel>
			</Button>
		)
	}

	const logout = () => {
		Alert.alert(
			'Log out',
			'Are you sure you want to log out?',
			[
				{
					text: 'Cancel',
					style: 'cancel'
				},
				{
					text: 'Log out',
					onPress: () => {
						Radar.stopTracking()
						User.logout()
					}
				}
			]
		)
	}

	return (
		<Container>
			<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
				<Observer>
					{() => (
						<UserInfoContainer>
							<TouchableOpacity onPress={ get(User, 'data.type_id', null) === UserType.broker ? () => navigation.navigate('BrokerProfile', {
								userId: get(User, 'data.id', null)
							}) : () => {}}>
								<UserImage source={get(User, 'data.profile_img') ? {uri: get(User, 'data.profile_img')} : images.default_image} />
							</TouchableOpacity>
							<UserNameLabel>{`${get(User, 'data.firstname', '')} ${get(User, 'data.middlename', '')} ${get(User, 'data.lastname', '')}`}</UserNameLabel>
							<UserAddressWrapper>
								<UserAddressIcon source={images.pin_location} />
								<UserAddressLabel>
									{get(User, 'data.address', 'Philippines')}
								</UserAddressLabel>
							</UserAddressWrapper>
							{ get(User, 'data.type_id', 2) === UserType.broker && (
								<UserSubscriptionWrapper>
									<UserSubscriptionLabel>
										{get(User, 'data.broker_details.subscription.name', '14 Days Trial')}
									</UserSubscriptionLabel>
								</UserSubscriptionWrapper>
							)}
						</UserInfoContainer>
					)}
				</Observer>
				<ButtonContainer>
					<UserButton onPress={() => navigation.navigate('UserAccountSettings')}>
						User Account Settings
					</UserButton>
					<UserButton onPress={() => navigation.navigate('UserPasswordUpdate')}>Change Password</UserButton>
					{ get(User, 'data.type_id', null) === UserType.broker && (
						<>
							<UserButton onPress={() => navigation.navigate('BrokerSubscription', {
								userId: get(User, 'data.id', null)
							})}>
								Subscription
							</UserButton>
							<UserButton onPress={() => navigation.navigate('BrokerProfile', {
								userId: get(User, 'data.id', null)
							})}>
								My Profile
							</UserButton>
						</>
					) }
					{ get(User, 'data.type_id', null) === UserType.buyer && (
						<>
							<UserButton onPress={() => navigation.navigate('BuyerHomepage', {
								view: 'Matches'
							})}>Matched Properties</UserButton>
						</>
					) }
				</ButtonContainer>
				<ButtonContainer>
					<UserButton onPress={() => navigation.navigate('About')}>About Snugg Neighborhood</UserButton>
					<UserButton onPress={() => navigation.navigate('TermsAndConditions')}>Terms & Condition</UserButton>
					<UserButton onPress={logout}>Logout</UserButton>
				</ButtonContainer>
			</ContentContainer>
		</Container>
	)
}

export default UserAccount