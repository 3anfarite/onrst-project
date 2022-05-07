import React, { useState } from 'react'

import { Dimensions, Text, KeyboardAvoidingView, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components'

import Header from '../components/Header'
import { auth, db } from '../firebase';


const Signup = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const Signup = () => {
        setLoading(true);
        if (!email || !password || !firstName || !lastName) {
            alert("All fields are mandatory");
            setPassword("");
            setEmail("");
            setLoading(false);
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            var user = authUser.user
            db.collection('users').doc(email).set({
                firstName,
                lastName,
                email,
                list: [],
            }).then(() => {
                navigation.replace("Tabs");
                setPassword('');
                setEmail("");
                setLoading(false);
            })
        }).catch(err => {
            alert(err)
            setPassword('');
            setEmail("");
            setLoading(false);
        })
    }

    return (
        <>
            <StatusBar style="dark" />
            <Container>
                
                    <Overlay>
                    <KeyboardAvoidingView style={{ width: '100%' }}>
                        
                        <FormWrapper>
                            <Form>
                                
                                    <SignInText>Sign Up</SignInText>
                                    <InputsWrapper>
                                       

                                            <Input
                                             placeholderTextColor='grey' 
                                             placeholder="First Name" 
                                             value={firstName} 
                                             onChangeText={text => setFirstName(text)} 
                                             />

                                            <Input
                                             placeholderTextColor='grey' 
                                             placeholder="Last Name" 
                                             value={lastName} 
                                             onChangeText={text => setLastName(text)} 
                                             />

                                       

                                        <Input 
                                          placeholderTextColor='grey' 
                                          placeholder="Enter your email" 
                                          value={email} 
                                          onChangeText={(text) => setEmail(text)} 
                                          type='email'
                                       />

                                        <Input 
                                          placeholderTextColor='grey' 
                                          placeholder="Password" 
                                          value={password} 
                                          secureTextEntry 
                                          onChangeText={(text) => setPassword(text)} 
                                          />

                                        <SubmitForm 
                                          onPress={Signup} 
                                          disabled={loading}>
                                             <ButtonText>
                                                {loading ? 'Loading...' : "Sign Up"}
                                             </ButtonText>
                                        </SubmitForm>

                                        <NewToAppTextWrapper 
                                          activeOpacity={0.5} 
                                          onPress={() => navigation.navigate("Login")}>
                                             <NewToApp>
                                                Already have an account ? Sign In
                                             </NewToApp>
                                        </NewToAppTextWrapper>
                                    </InputsWrapper>
                                
                            </Form>
                        </FormWrapper>
                       </KeyboardAvoidingView> 
                    </Overlay>
                
            </Container>
        </>
    )
}

export default Signup


const Container = styled.View`
	flex: 1;
    background-color: #000;
`


const FormWrapper = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Form = styled.View`
   height: 470px;
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

const Overlay = styled.View`
    background-color: #fff;
    flex: 1;
`



const InputsWrapper = styled.View` 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
