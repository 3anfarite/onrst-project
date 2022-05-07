import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import {
   Colors,
} from './../components/styles'
;

const {brand, darkLight, primary, red} = Colors


//asyn-storage
import AsyncStorage from '@react-native-async-storage/async-storage';


import { Feather } from '@expo/vector-icons';
import { auth } from '../firebase';
import EventsList from '../components/EventsList';
import { Text } from 'react-native';


const Welcome = ({navigation}) => {


	const signOut = ()=>{
		auth.signOut().then(()=>{
			AsyncStorage.clear()
			navigation.replace('Login')
		}).catch((error) => {

		})
	}

	

   return (
      <>
         <StatusBar style="black" />
				<Container>
					<HeaderText>Evenement</HeaderText>
					<Button>
						<Feather name='log-out' size={29} color='black' onPress = {signOut} />
					</Button>
				</Container>
				<EventsList  />
      </>
   )
};


export default Welcome

const Container = styled.View`
	width: 100%;
	height: 80px;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	padding: 0 11px;
`

const Button = styled.TouchableOpacity`
	width: 40px;
	height: 55px;
	border-radius: 21px;
	margin-top: 50px;
	margin-right: 50px;
	left: 75%;
`
const HeaderText = styled.Text`
	margin-top: 20px;
	margin-left: 10px;
	color: black;
	font-size: 35px;
	font-weight: bold;
	letter-spacing: -0.3px;
`