import React, {useContext } from 'react'

import styled from 'styled-components/native'

import {
	Ionicons,
	MaterialIcons,
	MaterialCommunityIcons,
   AntDesign
} from '@expo/vector-icons'


import UserPic from './UserPic';



const ToolBar = () => {
	return (
		<>
			<Container>
				<Row>
					<UserPic />
					<Input placeholder="What's on your mind?" />
				</Row>
			</Container>
			<BottomDivider />
		</>
	)
}

export default ToolBar

const Container = styled.View`
	width: 100%;
	height: 150px;
   margin-top: 10px;
   
`
const Row = styled.View`
	flex-direction: row;
	background: #ffffff;
	width: 100%;
	padding: 0 11px;
	align-items: center;
`
const Input = styled.TextInput`
	height: 50px;
	width: 100%;
	padding: 0 8px;
`
const Divider = styled.View`
	width: 100%;
	height: 0.5px;
	background: #f0f0f0;
`
const Menu = styled.View`
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 42px;
`
const MenuText = styled.Text`
	padding-left: 11px;
	font-weight: 500;
	font-size: 12px;
`
const Separator = styled.View`
	width: 1px;
	height: 26px;
	background: #f0f0f0;
`
const BottomDivider = styled.View`
	width: 100%;
	height: 10px;
	background: #f0f2f5;
`