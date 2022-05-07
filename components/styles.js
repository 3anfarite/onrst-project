import styled from "styled-components";
import { View, StatusBar, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import  Constants  from "expo-constants";


const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
   primary: "#fff",
   secondary: "#E5E7EB",
   tertiary: "#161B33",
   darkLight:"#9CA3AF",
   brand : "#0576B3",
   green :"#10B981",
   red:"#EF4444",
};

const {primary, secondary,tertiary,darkLight,brand,green,red } = Colors;

export const StyledContainer = styled.SafeAreaView`
   flex: 1;
   padding: 25px;
   padding-top: ${StatusBarHeight + 10}px;
   background-color: ${primary};
   padding-bottom: 10px;
   
`
export const InnerContainer = styled.SafeAreaView`
   flex: 1;
   width: 100%;
   align-items: center;
`

export const WelcomeContainer = styled(InnerContainer)`
   padding: 25px;
   padding-top: 10px;
   justify-content: center;
`

export const PageLogo = styled.Image`
   width: 150px;
   height: 150px;
`
export const Avatar = styled.Image`
   width: 35px;
   height: 35px;
   margin: auto;
   border-radius: 50px;
   border-width: 2px;
   border-color: ${primary};
   margin-bottom: 10px;
   margin-top: 10px;
`
 
export const WelcomeImage = styled.Image`
   height: 50%;
   min-width: 100%;
`

export const PageTitle = styled.Text`
   font-size: 36px;
   text-align: center;
   font-weight: bold;
   color: ${brand};
   padding: 10px;
   
`
export const SubTitle = styled.Text`
   font-size: 18px;
   margin-bottom: 20px;
   font-weight: bold;
   color: ${tertiary};
   letter-spacing: 1px;
`
export const StyledFormArea = styled.View`
   width: 90%;
`

export const StyledTextInput = styled.TextInput`
   background-color: ${secondary};
   padding: 15px;
   padding-left: 55px;
   padding-right: 55px;
   border-radius: 5px;
   font-size: 16px;
   height: 60px;
   margin-vertical: 3px;
   margin-bottom: 10px;
   color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
   color: ${tertiary};
   font-size: 13px;
   text-align: left;
`

export const RightIcon = styled.TouchableOpacity`
   right: 15px;
   top: 34px;
   position: absolute;
   z-index: 1;
`

export const LeftIcon = styled.View`
   left: 15px;
   top: 35px;
   position: absolute;
   z-index: 1;
   
`

export const StyledButton = styled.TouchableOpacity`
   padding: 15px;
   background-color: ${brand};
   justify-content: center;
   align-items: center;
   height: 60px;
   border-radius: 5px;
   margin-vertical: 5px;

   ${(props) => props.google == true && `
      background-color: #de5246;
      flex-direction:row;
   `}
`

export const ButtonText = styled.Text`
   color:${primary};
   font-size: 16px;

   ${(props) => props.google == true && `
      right: 5px;
   `}
`

export const MsgBox = styled.Text`
   text-align: center;
   font-size: 13px;
   color: ${(props) => (props.type == 'SUCCESS' ? green : red)};
`

export const Line = styled.View`
   height: 1px;
   width: 100%;
   background-color: ${darkLight};
   margin-vertical: 10px;
`

export const ExtraView = styled.View`
   justify-content: center;
   flex-direction: row;
   align-items: center;
   padding: 10px;
`

export const ExtraText = styled.Text`
   justify-content: center;
   align-items: center;
   align-content: center;
   color:${tertiary};
   font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
   justify-content: center;
   align-items: center;
`

export const TextLinkContent = styled.Text`
   color:${brand};
   font-size: 15px;
`













