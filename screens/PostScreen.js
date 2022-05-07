import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Header } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions'
import Fire from '../Fire';
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera';
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';


const firebase = require("firebase");
require("firebase/firestore");


const { width, height } = Dimensions.get('window')


const PostScreen = ({navigation}) => {

   const [ image, setImage] = useState(null);
   const [ caption, setCaption] = useState("");
   const [ titre, setTitre] = useState("");

   useEffect(() => {
      getPhotoPermission();
   },[])

   
   const getPhotoPermission = async () => {
      if(Constants.platform.ios){
         const { status } = await Camera.requestPermissionsAsync();

         if(status != "granted"){
            alert("On a besoin de votre permission pour acceder a vos photos!")
         }
      }

      if(Constants.platform.android){
         const { status } = await Camera.requestPermissionsAsync();

         if(status != "granted"){
            alert("On a besoin de votre permission pour acceder a vos photos!")
         }
      }
   }

   const handlePost = () => {
      Fire.shared.addPost({ text: caption, title: titre, localUri: image }).then(ref => {
         setImage({image: null});
         setCaption({text: ""});
         setTitre({title: ""})
         navigation.navigate("Home");
      }).catch(error => {
         alert(error);
      })
   }

   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4,3]
      });
      

      if(result.cancelled === false){
         setImage(result.uri);
         
      }
   }

   return (
      <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container} >
         
         <View style={styles.header} >
            <TouchableOpacity onPress={() => navigation.goBack()} >
               <Ionicons name="md-arrow-back" size={24} color="#000" ></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePost}  style={{color:"#D8D9DB"}} >
               <Text style={{fontWeight: "600"}} >Post</Text>
            </TouchableOpacity>
         </View>
         <ScrollView 
            style={styles.inputContainer} 
            keyboardShouldPersistTaps='always'
         >
            <TextInput 
               multiline={true} 
               numberOfLines={3} 
               style={{flex:1,marginLeft: 15,marginRight:15,}} 
               placeholder="Titre " 
               value={titre}
               onChangeText={ titre => setTitre( titre )}
            >
            </TextInput>

            <TextInput 
               multiline={true} 
               numberOfLines={10} 
               style={{flex:1,marginLeft: 15,marginRight:15,}} 
               placeholder="Partager un evenement" 
               value={caption}
               onChangeText={ caption => setCaption( caption )}
            >
            </TextInput>


            <TouchableOpacity style={styles.photo} onPress={pickImage} >
               <Ionicons name="md-camera" size={32} color="#D8D9DB" ></Ionicons>
            </TouchableOpacity>

            <View style = {{marginHorizontal: 32, marginTop: 32, height: 150 }} >
               {image && <Image source={{ uri: image }} style={{ width:300, height: 300}} />}
            </View>
         </ScrollView>
         
      </SafeAreaView> 
      
      </>  
   )
}

export default PostScreen


const styles = StyleSheet.create({
   container:{
      flex: 1,
   },
   header:{
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:32,
      paddingVertical: 20,
      borderBottomWidth: 1,
      borderBottomColor:"#D8D9DB"
   }, 
   
   avatar:{
      width: 48,
      height: 48,
      borderRadius:24,
      marginRight:16,
   },
   photo:{
      left:"90%",
   }
})