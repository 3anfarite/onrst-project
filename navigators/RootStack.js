import React from 'react';

//colors
import { Colors } from './../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Tabs from './../navigators/Tabs';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Stack.Navigator
            
            screenOptions={{
              headerShown: false,
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              
            }}
          >
            
              <Stack.Screen 
                name="Login" 
                component={Login} 
              />

              <Stack.Screen 
                name="Signup" 
                component={Signup} 
              />

              <Stack.Screen
                name="Tabs"
                component={Tabs}
              />
              
          </Stack.Navigator>
        </NavigationContainer>
  );
};

export default RootStack;
