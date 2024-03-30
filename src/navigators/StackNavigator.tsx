import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SuccessScreen from '../screens/SuccessScreen';
import { useAuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  const {isAuthenticated} = useAuthContext()
  return (
    <Stack.Navigator screenOptions={{headerShown : false,contentStyle:{backgroundColor :"#ffffff"}}}>
        {
          isAuthenticated ? <Stack.Screen name='Home' component={SuccessScreen}/> :  <Stack.Screen name='Login' component={LoginScreen}/>
        }
    </Stack.Navigator>
  )
}

export default StackScreens;