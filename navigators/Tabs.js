import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Welcome from './../screens/Welcome';
import PostScreen from './../screens/PostScreen';
import Profile from './../screens/Profile';
import PostedEvents from './../screens/PostedEvents';
import SearchScreen from './../screens/SearchScreen';


import { StyleSheet, Text,View ,Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { Colors } from '../components/styles';
import { Ionicons} from '@expo/vector-icons'; 
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';




const {brand, darkLight, primary, red} = Colors


const Tab = createBottomTabNavigator()

const Tabs = () => {
   return (
      <>
      
      <Tab.Navigator 
         screenOptions={{
            tabBarShowLabel:false,
            tabBarHideOnKeyboard:true,
            keyboardHidesTabBar: true,
            headerShown:false,
            
            tabBarStyle:{
               position:'absolute',
               height:60,
               ...styles.shadow
            }
         }}
      >
         
         <Tab.Screen 
            
            name="Home" 
            component={Welcome}
            options={{
               
               tabBarIcon: ({focused}) => (
                  <View>
                     <Ionicons 
                        name={focused ? 
                           'md-home' : 
                           'md-home-outline'}
                        size={25} 
                        color="#000000"
                        style={{
                           color: focused ? "#000000" : "#9CA3AF" ,
                        }}
                     />
                  </View>
               )
            }}
         />
         <Tab.Screen 
            name="Search" 
            component={SearchScreen}
            options={{
               tabBarIcon: ({focused}) => (
                  <View>
                     <Ionicons 
                        name={focused ? 
                           'md-search' : 
                           'md-search-outline'}
                        size={25} 
                        color="#000000"
                        style={{
                           color: focused ? "#000000" : "#9CA3AF" ,
                        }}
                     />
                  </View>
               )
            }}
         />
         <Tab.Screen 
            name="PostScreen" 
            component={PostScreen}
            options={{
               tabBarIcon: ({focused}) => (
                  <View>
                     <Ionicons 
                        name={focused ? 
                           'ios-add-circle' : 
                           'ios-add-circle-outline'}
                        size={30} 
                        color="#000000"
                        style={{
                           color: focused ? "#000000" : "#9CA3AF" ,
                        }}
                     />
                  </View>
               )
            }}
         />
         <Tab.Screen 
            name="PostedEvents"
            component={PostedEvents}
            options={{
               tabBarIcon: ({focused}) => (
                  <View >
                     <Ionicons 
                        name={focused ? 
                           'ios-list' : 
                           'ios-list-outline'}
                        size={30} 
                        color="#000000"
                        style={{
                           color: focused ? "#000000" : "#9CA3AF" ,
                        }}
                     />
                  </View>
               )
            }}
         />
         {/* <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{
               tabBarIcon: ({focused}) => (
                  <View >
                     <Ionicons 
                        name={focused ? 
                           'person' : 
                           'person-outline'}
                        size={25} 
                        color="#000000"
                        style={{
                           color: focused ? "#000000" : "#9CA3AF" ,
                        }}
                     />
                  </View>
               )
            }}
         /> */}
         
      </Tab.Navigator>
      
      </>
   )
}

const styles = StyleSheet.create({
   shadow:{
      shadowColor: "#0576B3",
      shadowOffset:{
         width: 0,
         height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2.5,
      elevation: 4,
   }
})

export default Tabs
