import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, Dimensions, StyleSheet } from 'react-native'
import { database } from '../firebase';
import Evenement from './../components/Evenement';


const { width, height } = Dimensions.get('window')


const SearchScreen = () => {

   // const [searchText, setSearchText] = useState('')

   // const [eventsData, setEventsData] = useState([eventsData])

   // useEffect(() => {
   //    const eventsRef = database.ref("evenements");
   //    eventsRef.on("value", (snapshot) => {
   //       const events = snapshot.val();
   //       const eventsData = [];
   //       for(let id in events) {
   //          eventsData.push(events[id]);
   //       }
   //       setEventsData(eventsData);
   //    })
   // }, [])

   


   // useEffect(() => {
   //    if(searchText === '') return;
   //    setEventsData(() => 
   //       eventsData.filter( (item) => (
   //          item.Titre.toLowerCase().match(searchText.toLowerCase())
   //       ))
   //    )
   // }, [searchText])

   // function handleChange(e){
   //    e.preventDefault();
   //    setSearchText(e.target.value)
   //    if(!e.target.value.length > 0){
   //       setEventsData(eventsData)
   //    }
   // }


   return (
      <>
      <View style={styles.container}>
        {/* <TextInput
          placeholder='Search here..'
          value={searchText}
          onChange={handleChange}
        />
        </View>
        <View>
        {eventsData.map(item => (
            <Evenement
               evenement={item}
               
            />
          ))} */}
        
      </View>
      </>
   )
}

export default SearchScreen



const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: 50,
     backgroundColor: 'white',
     borderRadius: 8,
     marginTop:30,
     marginLeft:10,
     justifyContent: 'center',
   },
   searchInput: {
     width: '100%',
     height: '100%',
     paddingLeft: 8,
     fontSize: 16,
   },
 });