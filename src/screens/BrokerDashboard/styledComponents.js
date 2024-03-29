import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
`

export const ContentContainer = styled.ScrollView`
    padding-top: 20px;
    padding-bottom: 120px;
    z-index: 1;
`

export const AddListingFloatingContainer = styled.View`
    position: absolute;
    height: 60px;
    width: 60px;
    bottom: 20px;
    right: 20px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.14);
    z-index: 3;
`

export const AddListingButton = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background-color: #EC7050;
`

export const AddIcon = styled.Image`
    width: 21px;
    height: 21px;
    resize-mode: contain;
`

export const Header = styled.Text`
    color: #17365D;
    font-size: 20px;
    font-family: Raleway-Bold;
    text-align: center;
		margin-top: 10px;
`

export const ImageLarge = styled.Image`
		height: 200px;
		width: 200px;
		resize-mode: contain;
`

export const CenterContainer = styled.View`
	text-align: center;
	align-items: center;
	justify-content: center;
	flex: 1;
	margin-top: 40px;
`