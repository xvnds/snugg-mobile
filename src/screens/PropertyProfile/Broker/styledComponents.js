import styled from 'styled-components'

export const Header = styled.Text`
    color: #17365D;
    font-size: 14px;
    font-family: Raleway-Bold;
`

export const Container = styled.TouchableOpacity`
    padding: 5px 15px 15px;
`

export const MainRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`

export const BrokerImage = styled.Image`
    border-radius: 10px;
    height: 50px;
    width: 50px;
    resize-mode: cover;
    background: #c6c6c6;
`

export const BrokerInfoContainer = styled.View`
    margin: 0px 9px;
`

export const BadgeContainer = styled.View`
    background: #E5E5E5;
    border-radius: 5px;
    padding: 4px 12px;
`

export const BadgeText = styled.Text`
    color: #17365D;
    font-family: Raleway-Regular;
    font-size: 12px;
`

export const MessageButton = styled.TouchableOpacity`
    background: #17365D;
    border-radius: 15px;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
`

export const CallButton = styled.TouchableOpacity`
    background: white;
    border: 1px solid #17365D;
    border-radius: 15px;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    margin-right: 7px;
`

export const MessageIcon = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: contain;
`

export const CallIcon = styled.Image`
  width: 15px;
  height: 15px;
  resize-mode: contain;
`