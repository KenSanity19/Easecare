import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import WelcomeScreen from './components/welcomeFrame';
import SignUp from './components/signUpFrame';
import AccountDetailsScreen from './components/signUpNxtFrame';
import LoginScreen from './components/loginFrame';
import ForgotPasswordScreen from './components/forgotPassFrame';
import SuccessScreen from './components/signUpSuccess';

const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                    <Stack.Screen name="AccountDetailsScreen" component={AccountDetailsScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
