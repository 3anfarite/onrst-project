import React, {useState} from 'react'
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import EventDetailsModal from './EventDetailsModal';


const { width, height } = Dimensions.get('window')

const Evenement = ({evenement}) => {

   const [ modalOpen, setModalOpen ] = useState(false)

   return (
      <>
      <TouchableOpacity onPress={() => setModalOpen(true)} >
         <EventDetailsModal
            evenement={evenement}
            open={modalOpen}
            onClose={()=>setModalOpen(false)}
         />
         <View style={styles.cardView} >
            <Text style={styles.title} >
               {evenement.Titre}
            </Text>
            <Text numberOfLines={5} style={styles.description} >
               {evenement.Description}
            </Text>
         </View>
      </TouchableOpacity>
      </>
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
   author: {
       marginBottom: width * 0.0,
       marginHorizontal: width * 0.05,
       fontSize: 15,
       color: 'gray'

   }

})

export default Evenement
