import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image, FlatList, Button, Dimensions, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


import { db } from '../firebase';
import Post from './../components/Post';
import styled from 'styled-components';

const PostsRef = db.collection('posts')

const { width, height } = Dimensions.get('window')



function PostedEvents() {
    const [posts, setPosts] = useState([]);
   

    useEffect(() => {
      const getPostsFromFirebase = [];
      PostsRef.onSnapshot((querySnapshot) => {
         querySnapshot.forEach((doc) => {
            getPostsFromFirebase.push({
               ...doc.data(),
               key: doc.id,
            })
         })
         setPosts(getPostsFromFirebase);
      })
    })
    
    return (
        <ScrollView>
           <Container>
					<HeaderText>Evenement</HeaderText>
				</Container>
            { posts 
               ? posts.map((item, index) =>
                  <Post
                     item={item}
                     key={index}
                  />
               ) 
            
               : <Text>Pas d'evenements en ce moment</Text>
               }           
            
        </ScrollView>

    )
}
const styles = StyleSheet.create({
   cardView: {
      backgroundColor: 'white',
      margin: width * 0.03,
      borderRadius: width * 0.05,
      shadowColor: '#000',
      shadowOffset: { width:0.5, height: 0.5 },
      shadowOpacity: 0.2,
      shadowRadius: 3
  },
  title: {
      marginHorizontal: width * 0.05,
      marginVertical: width * 0.02,
      color: 'black',
      fontSize: 20,
      fontWeight: "bold"

  },
  description: {
      marginVertical: width * 0.03,
      marginHorizontal: width * 0.04,
      color: 'gray',
      fontSize: 15
  },
  image: {
      height: height / 6,
      marginLeft: width * 0.05,
      marginRight: width * 0.05,
      marginVertical: height * 0.02
  },
  

})

const Container = styled.View`
	width: 100%;
	height: 80px;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	padding: 0 11px;
`


const HeaderText = styled.Text`
	margin-top: 20px;
	margin-left: 10px;
	color: black;
	font-size: 35px;
	font-weight: bold;
	letter-spacing: -0.3px;
`
export default PostedEvents;



