import styled from 'styled-components'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const CardContainer = styled.TouchableOpacity`
  border-radius: 20px;
  overflow: hidden;
  flex: 1;
  background: #FFFFFF;
  position: relative; 
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  margin-top: 20px;
  border: 1px solid rgba(0,0,0,0.16);
`

export const CardAbsoluteHeader = styled.View`
  position: absolute;
  flex-direction: row;
  justify-content: flex-end;
  top: 0px;
  width: 100%;
  left: 0px;
  padding: 10px 13px 10px 10px;
  z-index: 1;
`

export const LikesWrapper = styled.View`
  background: #FFFFFF80;
  border-radius: 5px;
  padding: 5px 8px;
  flex-direction: row;
  align-items: center;
`

export const HeartIcon = styled.Image`
  width: 17.2px;
  height: 16.18px;
  tint-color: #EC7050;
  margin-right: 5px;
  resize-mode: contain;
`

export const LikeLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #2E3743;
`

export const OptionButton = styled.TouchableOpacity``

export const OptionIcon = styled.Image`
  width: 5px;
  height: 19px;
  resize-mode: contain;
`

export const PriceWrapper = styled.View`
  background: #17365D;
  border-top-left-radius: 10px;
  padding: 8px 15px;
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 1;
`

export const PriceLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
`

export const CardImageContainer = styled.View`
  width: 100%;
  height: ${1.8*((width-50)/3)}px;
`

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
`

export const CardContent = styled.View`
  padding: 9.23px 15px;
`

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`

export const CardHeaderLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 16px;
  line-height: 19px;
  color: #17365D;
`

export const Verified = styled.Image`
  width: 12px;
  height: 12px;
  margin-left: 6px;
  resize-mode: contain;
`

export const AddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 6px;
`

export const AddressIcon = styled.Image`
  width: 6.5px;
  height: 9.64px;
  resize-mode: contain;
  margin-right: 5.5px;
  tint-color: #767676;
`

export const AddressLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
`

export const AdditionalInfo = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
`

export const CardInfo = styled.View`
  padding: 3px 7px;
  background: #EC7050;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 7px;
`

export const CardInfoIcon = styled.Image`
  width: 9px;
  height: 9px;
  margin-right: 5px;
  resize-mode: contain;
`

export const CardInfoLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  line-height: 13px;
  color: #FFFFFF;
`