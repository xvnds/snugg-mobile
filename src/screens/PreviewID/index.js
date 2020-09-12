import React from 'react'
import { SafeAreaView } from 'react-native'
import Back from 'src/components/Back'
import Button from 'src/components/Button'
import {
	Row
} from 'src/components/styledComponents'
import { 
	BackContainer,
	ButtonsContainer,
	Container,
	ContentContainer,
	Image,
	NoteText
} from './styledComponents'

const samplePhoto = 'https://www.dmv.pa.gov/REALID/PublishingImages/Pages/REAL-ID-Images/Adult_DL_Fully150dpi.jpg'

export default ({ navigation, route }) => {
    
	const uploadPhoto = () => {
		// TODO: Upload photo to GCP Storage and pass image url
		navigation.navigate('SelectLocationMap')
	}
    
	return(
		<Container start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#FFF', '#FFF', '#E8E8E8']}>
			<SafeAreaView style={{ flex: 1 }}>
				<BackContainer>
					<Back navigation={navigation} />
				</BackContainer>
				<ContentContainer>
					<NoteText>
                        Please make sure that the details are clear and readable before submitting the photo.
					</NoteText>
					<Image source={{uri: route.params.croppedImage ? route.params.croppedImage : samplePhoto }} />
					<ButtonsContainer>
						<Row>
							<Button text="SUBMIT PHOTO" onPress={uploadPhoto}/>
						</Row>
					</ButtonsContainer>
				</ContentContainer>
                
			</SafeAreaView>
		</Container>
	)
}