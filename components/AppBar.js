import React, { useLayoutEffect } from 'react'

import styled from 'styled-components'

import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { NavigationHelpersContext } from '@react-navigation/core';






const AppBar = ({navigation}) => {

	


   // const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext)
   // const {name , email, photoUrl} = storedCredentials;
   // const AvatarImg = photoUrl ? {uri: photoUrl} : null

   // const clearLogin = () => {
   //    AsyncStorage
   //       .removeItem('EvenementCredentials')
   //       .then(() => {
   //          setStoredCredentials("")
   //       })
   //       .catch(error => console.log(error))
   // }


	return (
		<Container>
			<Text>Evenements</Text>
			<Row>
				<Button>
					<Feather name='log-out' size={29} color='black' 
						onPress = {signOut}/>
				</Button>
            
			</Row>
		</Container>
	)
}

export default AppBar


