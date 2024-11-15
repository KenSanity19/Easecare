import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import styles from './styles/signUpSuccess';

const SuccessScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/topImage.png')}
                style={styles.topImage}
                resizeMode="cover"/>

            <Image
                source={require('../assets/images/Check.png')}
                style={styles.checkImage}/>

            <Text style={styles.successText}>SUCCESS!</Text>
            
            <Button
                mode="contained"
                onPress={() => navigation.navigate('ServicesScreen')}
                style={styles.button}
                labelStyle={styles.buttonText}>View Services
            </Button>

            <ImageBackground
                source={require('../assets/images/bottomImage.png')}
                style={styles.bottomImage}
                resizeMode="cover"/>
        </View>
    );
};

export default SuccessScreen;
