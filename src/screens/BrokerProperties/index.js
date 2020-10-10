import React, { useState } from 'react'
import {
	Alert
} from 'react-native'
import {
	CallIconReplacement,
	Container,
	ContentContainer,
	Icon,
	MessageIconReplacement,
	Row,
	UserAddressIcon,
	UserAddressLabel,
	UserAddressWrapper,
	UserBrokerStatus,
	UserBrokerStatusLabel,
	UserImage,
	UserInfoButtonsContainer,
	UserInfoContainer,
	UserInfoRow
} from './styledComponents'
import images from './images'
import Rate from './Rate'
import Toggle from './Toggle'
import ScreenToggle from './ScreenToggle'
import { Store } from 'src/store'

const BrokerProperties = () => {

  const { data } = Store.User;
	const [activePage, setActivePage] = useState('Properties')

	const messageButtonOnPress = () => {
		Alert.alert('Button on press', 'Message button on press')
	}

	const callButtonOnPress = () => {
		Alert.alert('Button on press', 'Call button on press')
	}

	const onChangeToggle = column => {
		setActivePage(column)
	}

	return (
		<Container>

			<ContentContainer contentContainerStyle={{paddingBottom: 50}}>
				<UserInfoContainer>
					<UserImage />
					<UserInfoRow>
						<UserBrokerStatus>
							<UserBrokerStatusLabel>
								Licensed Broker
							</UserBrokerStatusLabel>
						</UserBrokerStatus>
						<Rate rate={3} />
						<UserAddressWrapper>
							<UserAddressIcon source={images.pin_location} />
							<UserAddressLabel>{data.address}</UserAddressLabel>
						</UserAddressWrapper>
					</UserInfoRow>
					<UserInfoButtonsContainer>
						<MessageIconReplacement onPress={messageButtonOnPress}>
							<Icon source={images.message} />
						</MessageIconReplacement>
						<CallIconReplacement onPress={callButtonOnPress}>
							<Icon source={images.cell} />
						</CallIconReplacement>
					</UserInfoButtonsContainer>
				</UserInfoContainer>
				<Row>
					<Toggle onChangeToggle={onChangeToggle} defaultAs={activePage} />
				</Row>
				<ScreenToggle page={activePage} />
			</ContentContainer>
		</Container>
	)
}

export default BrokerProperties