import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Modal, Dimensions, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

const PostDetailsModal = ({open, onClose, item}) => {

  if(!open) return null
  return (
  <Modal animationType="slide" >
    <ScrollView>
      
        <View style={styles.container}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={onClose}
          />
          <Text style={styles.Titre}>
            {item.title}
          </Text>
          
          <Text style={styles.description} >
            {item.text}
          </Text>

          
          <Image  
            source={item.image}
            style={styles.image}
          />


        </View>
      
    </ScrollView>
  </Modal>
  );
};

export default PostDetailsModal;


const styles = StyleSheet.create({
   container: {
     margin: 20,
   },
   image: {
     width: '100%',
     aspectRatio: 3 / 2,
     resizeMode: 'cover',
     borderRadius: 10,
   },
 
   Titre: {
    marginVertical: width * 0.02,
    color: 'black',
    fontSize: 20,
    fontWeight: "bold"
   },
   description: {
      marginVertical: width * 0.02,
     fontSize: 18,
     lineHeight: 26,
   },
   dateLieu: {
     fontSize: 18,
     marginVertical: 10,
     fontWeight: "bold",
   },
   image: {
      height: height / 6,
      marginLeft: width * 0.05,
      marginRight: width * 0.05,
      marginVertical: height * 0.02
  },
   
   longDescription: {
     marginVertical: 20,
     fontSize: 16,
     lineHeight: 24,
   }
 });
 