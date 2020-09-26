import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #ffffff;
`

export const ContentContainer = styled.ScrollView`
    z-index: 1;
    padding: 20px 25px 120px;
`

export const UserInfoContainer = styled.View`
  align-items: center;
  padding-bottom: 20px;
`

export const UserImage = styled.View`
  width: 90px;
  height: 90px;
  background: #c6c6c6;
  border-radius: 8px;
  elevation: 3;
  margin: 5px 0px;
`

export const UserNameLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 20px;
  color: #17365D;
  text-align: center;
  margin: 5px 0px 0px;
`

export const UserAddressWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

export const UserAddressIcon = styled.Image`
  width: 17px;
  height: 12px;
  resize-mode: contain;
  margin-right: 2px;
`

export const UserAddressLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 12px;
  color: #767676;
  text-align: center;
`

export const UserSubscriptionWrapper = styled.View`
  background: #17365D;
  border-radius: 5px;
  padding: 7px 25px;
  align-items: center;
`

export const UserSubscriptionLabel = styled.Text`
  font-family: Raleway-Bold;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`

export const ButtonContainer = styled.View`
  padding: 20px 0px;
`

export const Button = styled.TouchableOpacity`
  padding: 13px 20px;
  background-color: #ffffff;
  border: 1px solid #70707026;
  border-radius: 5px;
  margin: 7px 0px;
`

export const ButtonLabel = styled.Text`
  font-family: Raleway-Regular;
  font-size: 15px;
  line-height: 16px;
  color: #2E3743;
  text-align: left;
`