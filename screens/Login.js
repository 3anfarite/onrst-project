import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Dimensions, Text, KeyboardAvoidingView, Platform } from 'react-native'
import styled from 'styled-components';

import Header from '../components/Header'
import { auth, db } from '../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const login = async () => {
        setLoading(true);
        if (!email || !password) {
            alert("All fields are mandatory");
            setPassword("");
            setEmail("");
            setLoading(false);
            return;
        }

        auth.signInWithEmailAndPassword(email, password)
            .then( async (authUser) => {
                navigation.replace("Tabs");
                setPassword('');
                setEmail("");
                
                setLoading(false);
                await AsyncStorage.setItem("userData", JSON.stringify(authUser));
            })
            .catch(err => {
                setLoading(false);
                alert(err)
            })
    }

    const getToken = async () =>{
        let userData = await AsyncStorage.getItem("userData");
        if(userData){
            navigation.replace('Tabs')
        }else{
            console.log("Something went wrong", error);
        }  
    }    
    useEffect(() => {
        getToken();
    },[])



    return (
        <>
            <StatusBar style="dark" />
            <Container>
                
                        <Header login={false} />
                        <FormWrapper>
                            <Form>
                                <SignInText>Sign In</SignInText>

                                <Input 
                                 placeholder="Enter your email" 
                                 placeholderTextColor='grey' 
                                 value={email} 
                                 onChangeText={(text) => setEmail(text)} 
                                />
                                
                                <Input 
                                 placeholder="Password" 
                                 placeholderTextColor='grey' 
                                 secureTextEntry 
                                 value={password} 
                                 onChangeText={(text) => setPassword(text)} 
                                 />
                                
                                <SubmitForm onPress={login} disabled={loading}>
                                   <ButtonText>{loading ? "Loading..." : "Sign In"}</ButtonText>
                                </SubmitForm>

                                <NewToAppTextWrapper 
                                 activeOpacity={0.5} 
                                 onPress={() => navigation.navigate("Signup")}>
                                    <NewToApp>New to App ? Sign Up</NewToApp>
                                </NewToAppTextWrapper>

                            </Form>
                        </FormWrapper>
                    

            </Container>
        </>
    )
}

export default Login

const Container = styled.View`
	flex: 1;
    background-color: #fff;
`


const FormWrapper = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 70%;
`

const Form = styled.View`
   height: 400px;
    width: 90%;
    background-color: black;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
`

const SubmitForm = styled.TouchableOpacity`
    width: 95%;
    height: 50px;
    color: white;
    border-radius: 10px;
    border: none;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    background-color: #0576B3;
`

const Input = styled.TextInput`
    width: 95%;
    height: 50px;
    border: none;
    padding: 10px;
    border-radius: 15px;
    background-color: #333333;
    color: white;
    margin-top: 10px;
`

const ButtonText = styled.Text`
	font-size: 15px;
	font-weight: bold;
    padding-left: 5px;
    color: white;
`
const SignInText = styled.Text`
font-size: 30px;
font-weight: bold;
color: white;
margin: 10px;
text-align: left;
`

const NewToAppTextWrapper = styled.TouchableOpacity`
    width: 100%;
`

const NewToApp = styled.Text`
font-size: 15px;
font-weight: 500;
text-align: center;
color: #ccc;
margin: 15px;
text-align: center;
`
