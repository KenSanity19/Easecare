import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Text, TextInput, Button, Menu } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import styles from '../styles/signUpStyle';
import HoverableButton from './hoverableButton';

const SignUp = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [disabilityType, setDisabilityType] = useState('');
    const [disabilityDuration, setDisabilityDuration] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [pwdIdFile, setPwdIdFile] = useState(null);

    const [sexMenuVisible, setSexMenuVisible] = useState(false);
    const [disabilityTypeMenuVisible, setDisabilityTypeMenuVisible] = useState(false);
    const [disabilityDurationMenuVisible, setDisabilityDurationMenuVisible] = useState(false);

    const handleFilePicker = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type === 'success') {
            setPwdIdFile(result);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Personal Information:</Text>

            <TextInput
                label="Name"
                mode="outlined"
                value={name}
                onChangeText={setName}
                style={styles.input}
                left={<TextInput.Icon icon={() => <Ionicons name="person" size={20} color="#6e6e6e" />} />}/>

            {/* Age and Sex Row */}
            <View style={styles.row}>
                <TextInput
                    label="Age"
                    mode="outlined"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                    style={[styles.input, styles.halfInput, styles.ageInput]}
                    left={<TextInput.Icon icon={() => <Ionicons name="calendar" size={20} color="#6e6e6e" />} />}/>

                <Menu
                    visible={sexMenuVisible}
                    onDismiss={() => setSexMenuVisible(false)}
                    anchor={
                        <TextInput
                            label="Sex"
                            mode="outlined"
                            value={sex}
                            style={[styles.input, styles.halfInput, styles.sexInput]}
                            left={<TextInput.Icon icon={() => <Ionicons name="transgender" size={20} color="#6e6e6e" />} />}
                            right={<TextInput.Icon icon="menu-down" onPress={() => setSexMenuVisible(true)} />}/>}>
                    <Menu.Item onPress={() => { setSex('Male'); setSexMenuVisible(false); }} title="Male" />
                    <Menu.Item onPress={() => { setSex('Female'); setSexMenuVisible(false); }} title="Female" />
                    <Menu.Item onPress={() => { setSex('Other'); setSexMenuVisible(false); }} title="Other" />
                </Menu>
            </View>

            {/* Disability Type Dropdown */}
            <Menu
                visible={disabilityTypeMenuVisible}
                onDismiss={() => setDisabilityTypeMenuVisible(false)}
                anchor={
                    <TextInput
                        label="Type of Disability"
                        mode="outlined"
                        value={disabilityType}
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <Ionicons name="accessibility" size={20} color="#6e6e6e" />} />}
                        right={<TextInput.Icon icon="menu-down" onPress={() => setDisabilityTypeMenuVisible(true)} />}/>}>
                <Menu.Item onPress={() => { setDisabilityType('Visual Impairment'); setDisabilityTypeMenuVisible(false); }} title="Visual Impairment" />
                <Menu.Item onPress={() => { setDisabilityType('Hearing Impairment'); setDisabilityTypeMenuVisible(false); }} title="Hearing Impairment" />
                <Menu.Item onPress={() => { setDisabilityType('Mobility Impairment'); setDisabilityTypeMenuVisible(false); }} title="Mobility Impairment" />
                <Menu.Item onPress={() => { setDisabilityType('Cognitive Impairment'); setDisabilityTypeMenuVisible(false); }} title="Cognitive Impairment" />
            </Menu>

            {/* Disability Duration Dropdown */}
            <Menu
                visible={disabilityDurationMenuVisible}
                onDismiss={() => setDisabilityDurationMenuVisible(false)}
                anchor={
                    <TextInput
                        label="How long have you been disabled"
                        mode="outlined"
                        value={disabilityDuration}
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <Ionicons name="time" size={20} color="#6e6e6e" />} />}
                        right={<TextInput.Icon icon="menu-down" onPress={() => setDisabilityDurationMenuVisible(true)} />}/>}>
                <Menu.Item onPress={() => { setDisabilityDuration('Less than a year'); setDisabilityDurationMenuVisible(false); }} title="Less than a year" />
                <Menu.Item onPress={() => { setDisabilityDuration('1-3 years'); setDisabilityDurationMenuVisible(false); }} title="1-3 years" />
                <Menu.Item onPress={() => { setDisabilityDuration('3-5 years'); setDisabilityDurationMenuVisible(false); }} title="3-5 years" />
                <Menu.Item onPress={() => { setDisabilityDuration('5+ years'); setDisabilityDurationMenuVisible(false); }} title="5+ years" />
            </Menu>

            <TextInput
                label="Contact Number"
                mode="outlined"
                value={contact}
                onChangeText={setContact}
                keyboardType="phone-pad"
                style={styles.input}
                left={<TextInput.Icon icon={() => <Ionicons name="call" size={20} color="#6e6e6e" />} />}/>
            <TextInput
                label="Address"
                mode="outlined"
                value={address}
                onChangeText={setAddress}
                style={styles.input}
                left={<TextInput.Icon icon={() => <Ionicons name="home" size={20} color="#6e6e6e" />} />}/>
            <View style={styles.separator} />

            <Text style={styles.fileUploadText}>Upload your PWD ID here: </Text>
            <Button mode="outlined" onPress={handleFilePicker} style={styles.fileButton}>Choose File</Button>
            {pwdIdFile && <Text style={styles.fileText}>{pwdIdFile.name}</Text>}

            <HoverableButton
                mode="contained"
                style={styles.registerButton}
                labelStyle={styles.registerButtonText}
                onPress={() => Alert.alert('Registered', 'Success!')}>Register
            </HoverableButton>

            <Button
                mode="text"
                style={styles.loginRedirectButton}
                labelStyle={{ color: 'black' }}
                onPress={() => navigation.navigate('LoginScreen')}>
                Already have an account? <Text style={styles.signUpText}>Login</Text>
            </Button>
        </View>
    );
};

export default SignUp;
