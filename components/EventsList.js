import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Text, Image, Dimensions, FlatList,ScrollView } from 'react-native'
import { database } from '../firebase';
import Evenement from './Evenement';




const EventsList = () => {


   const [ eventsList, setEventsList ] = useState([]);

   useEffect(() => {
         const eventsRef = database.ref("evenements");
         eventsRef.on("value", (snapshot) => {
            const events = snapshot.val();
            const eventsList = [];
            for(let id in events) {
               eventsList.push(events[id]);
            }
            setEventsList(eventsList);
         })
      }, [])

      // if(!eventsList){
      //    return <Text>No data available</Text>
      // }

   return (
   <>
      <ScrollView  >

         { eventsList 
            ? eventsList.map((evenement, index) =>
               <Evenement evenement={evenement} key={index}  />
            ) 
         
            : <Text>Pas d'evenements en ce moment</Text>
         }
      </ScrollView>
   </>
   )
}




export default EventsList
