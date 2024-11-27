import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from './styles/signUpSuccessStyles';

const PassSuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"/>

            <Image
                source={require('../assets/images/Check.png')}
                style={styles.checkImage}/>

            <Text style={styles.successText}>Password Updated!</Text>
            <Text style={styles.subtitle}>
           You password has been changed successfully
           Use your new password to log in.
          </Text>
            
            <Button
                mode="contained"
                onPress={() => navigation.navigate('LoginScreen')}
                style={styles.button}
                labelStyle={styles.buttonText}>LOGIN
            </Button>

            <ImageBackground
                source={require('../assets/images/bottomImage.png')}
                style={styles.bottomImage}
                resizeMode="cover"/>
        </View>
    );
};

export default PassSuccessScreen;
