import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import './firebaseConfig';
import WelcomeScreen from '../components/welcomeFrame';
import SignUp from '../components/signUpFrame';
import LoginScreen from '../components/loginFrame';
import ForgotPasswordScreen from '../components/forgotPassFrame';
import SuccessScreen from '../components/signUpSuccess';
import ServicesScreen from '../components/servicesFrame';
import DentalCareScreen from '../components/dentalCareFrame';
import BeautyParlourScreen from '../components/beautyParlourFrame';
import NailTreatmentScreen from '../components/nailTreatmentFrame';
import HealthWellnessScreen from '../components/healthWellnessFrame';
import HomePage from '../components/home';
import SettingsScreen from '../components/settings';
import ProfileScreen from '../components/profile';
import NotificationScreen from '../components/notify';
import SecurityScreen from '../components/security';
import ChangePasswordScreen from '../components/changepass';
import PassSuccessScreen from '../components/changepassSucc';
import AccountDetailsScreen from '../components/accountdetails';
import FeedbackScreen from '../components/feedback';

const Stack = createStackNavigator();

export default function App() {
    return (
        <PaperProvider>
                <Stack.Navigator
                    initialRouteName="Welcome"
                    screenOptions={{
                        headerStyle: {
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#1E90FF',
                        },
                        headerTintColor: '#333333', 
                    }}>
                    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />     
                    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />        
                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="SuccessScreen" component={SuccessScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
                    <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="ServicesScreen" component={ServicesScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="DentalCareScreen" component={DentalCareScreen} options={{ title: 'Dental Care' }} />
                    <Stack.Screen name="BeautyParlourScreen" component={BeautyParlourScreen} options={{ title: 'Beauty Parlour' }} />
                    <Stack.Screen name="NailTreatmentScreen" component={NailTreatmentScreen} options={{ title: 'Nail Treatment' }} />
                    <Stack.Screen name="HealthWellnessScreen" component={HealthWellnessScreen} options={{ title: 'Health and Wellness' }} />
                    <Stack.Screen name="SettingsScreen" component={SettingsScreen}  options={{ title: 'Settings' }} />
                    <Stack.Screen name="ProfileScreen" component={ProfileScreen}  options={{ headerShown: false }} />  
                    <Stack.Screen name="NotificationScreen" component={NotificationScreen}  options={{ title: 'Notification' }} /> 
                    <Stack.Screen name="SecurityScreen" component={SecurityScreen}  options={{ title: 'Security' }} /> 
                    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen}  options={{ title: 'ChangePass' }} />
                    <Stack.Screen name="PassSuccessScreen" component={PassSuccessScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="AccountDetailsScreen" component={AccountDetailsScreen} options={{ title: 'Account Details' }} />
                    <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} options={{ title: 'Feedback' }} />
                    
                </Stack.Navigator>
        </PaperProvider>
    );
}
