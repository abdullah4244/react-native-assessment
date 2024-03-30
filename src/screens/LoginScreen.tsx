import React, { useState } from 'react'
import { View, Text, SafeAreaView, Platform, StatusBar, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import Input from '../components/UI/Input'
import { GlobalStyles } from '../constants/styles'
import { Ionicons } from '@expo/vector-icons'
import { GlobalColors } from '../constants/colors'
import PrimaryButton from '../components/UI/PrimaryButton'
import { emailValidator } from '../utils'
import BottomSheet from '../components/BottomSheet'
import { ApiRepository } from '../mockAPI/ApiRepository'
import AuthContext, { AuthContextType, useAuthContext } from '../context/AuthContext'

type TextInputState = {
    value: string,
    isValid: boolean,
    errorMsg: string
}

type LoginFormState = {
    email: TextInputState,
    password: TextInputState
}

const LoginScreen = () => {
    const [isToggleEye, setIsToggleEye] = useState<boolean>(true);
    const [isModalVisible,setIsModalVisible] = useState(false);
    const [isFetching ,setIsFetching] = useState<boolean>(false);
    const {signInSucess} = useAuthContext();
    const [formState, setFormState] = useState<LoginFormState>({
        email: {
            errorMsg: '',
            isValid: true,
            value: ''
        },
        password: {
            errorMsg: '',
            isValid: true,
            value: ''
        }
    })
    const [errorMsg,setErrorMsg] = useState('');

    const apiRepository = new ApiRepository()
    const onSubmit =  async () => {
        const isValidEmail =  emailValidator(formState.email.value)
        if (isValidEmail.status) {
            setIsFetching(true)
           try{
            const res = await apiRepository.postLogin(formState.email.value,formState.password.value);
            signInSucess()
           }
           catch(err) {
              const error = err as Error;
                setIsModalVisible(true)
                setErrorMsg(error.message)
           }
           finally {
            setIsFetching(false)
           }
           
        } 
        else {
            setFormState((prevState)=>({
                ...prevState,
                email : {
                    ...prevState.email,
                    isValid : false,
                    errorMsg : isValidEmail.msg
                }
            }))
        }
    }
    return (
        <>
        <SafeAreaView
            style={{
                paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <ScrollView>
            <View style={styles.container}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />
                <View style={styles.formContainer}>
                    <View style={[GlobalStyles.mt_2]}>
                        <Input placeholder='Email' value={formState.email.value} onChangeText={(e) => {
                            setFormState((prevState) => ({ ...prevState, email: {  value: e,errorMsg :'',isValid : true } }))
                        }} error={!formState.email.isValid} errorMsg={formState.email.errorMsg} />
                    </View>
                    <View style={[GlobalStyles.mt_2]}>
                        <Input placeholder='Password' value={formState.password.value} onChangeText={(e) => {
                            setFormState((prevState) => ({ ...prevState, password: { ...prevState.password, value: e } }))
                        }} error={!formState.password.isValid} errorMsg={formState.password.errorMsg} secureTextEntry={isToggleEye ? true : false} PostFix={
                            <Pressable onPress={() => { setIsToggleEye((prev) => !prev) }}>
                                <Ionicons name={isToggleEye ? 'eye-off' : 'eye'} style={styles.icon} />
                            </Pressable>} />
                    </View>
                    <View style={[GlobalStyles.mt_2]}>
                        <Text style={styles.primaryText}>Need Help?</Text>
                    </View>
                    <View style={[GlobalStyles.mt_1]}>
                        <Text style={styles.secondaryText}>
                        By clicking “Log in”, you agree to receive SMS text messages from Chime to verify your identity
                        </Text>
                    </View>
                </View>
                <View style={[GlobalStyles.mt_4,{width : "100%"}]}>
                        <PrimaryButton disabled={isFetching} label={isFetching ?  'Submitting...' : 'Log In'} onPress={onSubmit}/>
                </View>
                <BottomSheet isVisible={isModalVisible} message={errorMsg} setIsVisible={setIsModalVisible}/>
            </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
        objectFit: "contain"
    },
    formContainer: {
        width: "100%",
        marginTop: 12,
        paddingLeft: 32,
        paddingRight: 32
    },
    icon: {
        color: "gray",
        fontSize: 20
    },
    primaryText : {
        color : GlobalColors.secondaryGreen,
        fontSize : 18,
        fontWeight : '700',
        textAlign : 'center'
    },
    secondaryText : {
        color : GlobalColors.primaryGrey,
        fontSize : 14,
        textAlign : 'center'
    }
})