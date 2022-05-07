import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Modal, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

const EventDetailsModal = ({open, onClose, evenement}) => {

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
            {evenement.Titre}
          </Text>

          
          <Text style={styles.description} >
            {evenement.Description}
          </Text>

          
          <Text style={styles.dateLieu}>
            {evenement.DateLieu}
          </Text>

          
          <Text style={styles.totalPrice}>{evenement.SiteWeb}</Text>

        </View>
      
    </ScrollView>
  </Modal>
  );
};

export default EventDetailsModal;


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
   oldPrice: {
     color: '#5b5b5b',
   },
   price: {
     fontWeight: 'bold',
   },
   totalPrice: {
     color: '#5b5b5b',
     textDecorationLine: 'underline',
   },
   longDescription: {
     marginVertical: 20,
     fontSize: 16,
     lineHeight: 24,
   }
 });
 