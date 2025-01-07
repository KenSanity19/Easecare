import React, { useState } from 'react';
import { View, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Text, TextInput, Button, Menu } from 'react-native-paper';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import styles from './styles/signUpStyle';
import HoverableButton from './hoverableButton';
import { getDatabase, ref, set, get } from 'firebase/database';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../app/firebaseConfig';

const SignUp = ({ navigation }) => {
    // State variables for user details
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [disabilityType, setDisabilityType] = useState('');
    const [disabilityDuration, setDisabilityDuration] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pwdIdFile, setPwdIdFile] = useState(null);

    const [sexMenuVisible, setSexMenuVisible] = useState(false);
    const [disabilityTypeMenuVisible, setDisabilityTypeMenuVisible] = useState(false);
    const [disabilityDurationMenuVisible, setDisabilityDurationMenuVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFilePicker = async () => {
        try {
            let result = await DocumentPicker.getDocumentAsync({});
            if (result.type === 'success') {
                setPwdIdFile(result);
            } else {
                Alert.alert('File Selection Cancelled');
            }
        } catch (error) {
            console.error('File Picker Error:', error);
            Alert.alert('Error', 'Unable to pick file. Please try again.');
        }
    };

    const handleRegister = async () => {
        // Validate required fields
        if (!firstName || !lastName || !age || !sex || !disabilityType || !disabilityDuration || !contact || !address || !email || !password) {
            Alert.alert('Error', 'All fields are required. Please fill out the form completely.');
            return;
        }

        if (contact.length !== 10 || contact[0] !== '9') {
            Alert.alert('Error', 'Contact number must be 10 digits and start with 9 (e.g., +639XXXXXXXX).');
            return;
        }

        setLoading(true); // Start loading

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            const db = getDatabase();
            db.persistenceEnabled = true;
            const customersRef = ref(db, 'tbl_customer');
            const snapshot = await get(customersRef);

            let newUserId = 'C1';
            if (snapshot.exists()) {
                const userIds = Object.keys(snapshot.val());
                const numericIds = userIds.map((id) => parseInt(id.replace('C', ''), 10)).filter((num) => !isNaN(num));
                const highestId = Math.max(...numericIds);
                newUserId = `C${highestId + 1}`;
            }

            await set(ref(db, `tbl_customer/${newUserId}`), {
                firstName,
                middleName,
                lastName,
                age,
                sex,
                disabilityType,
                disabilityDuration,
                contact,
                address,
                email,
                pwdIdFile: pwdIdFile?.name || null,
            });

            navigation.navigate('SuccessScreen', { address });
        } catch (error) {
            console.error('Registration Error:', error);

            let errorMessage = '';
            switch (error.code) {
                case 'auth/email-already-in-use':
                    errorMessage = 'This email is already in use. Please try another.';
                    break;
                case 'auth/invalid-email':
                    errorMessage = 'The email address is not valid.';
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = 'Email/password accounts are not enabled. Please contact support.';
                    break;
                case 'auth/weak-password':
                    errorMessage = 'The password is too weak. Please choose a stronger password.';
                    break;
                default:
                    errorMessage = error.message || 'An error occurred during registration.';
                    break;
            }

            Alert.alert('Error', errorMessage);
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.sectionHeader}>Personal Information:</Text>

                <TextInput
                    label="First Name"
                    mode="outlined"
                    value={firstName}
                    onChangeText={setFirstName}
                    style={styles.input}
                    left={<TextInput.Icon icon={() => <Ionicons name="person" size={20} color="#6e6e6e" />} />}/>
                <TextInput
                    label="Middle Name"
                    mode="outlined"
                    value={middleName}
                    onChangeText={setMiddleName}
                    style={styles.input}
                    left={<TextInput.Icon icon={() => <Ionicons name="person" size={20} color="#6e6e6e" />} />}/>
                <TextInput
                    label="Last Name"
                    mode="outlined"
                    value={lastName}
                    onChangeText={setLastName}
                    style={styles.input}
                    left={<TextInput.Icon icon={() => <Ionicons name="person" size={20} color="#6e6e6e" />} />}/>

                <View style={styles.row}>
                    <TextInput
                        label="Age"
                        mode="outlined"
                        value={age}
                        onChangeText={setAge}
                        keyboardType="numeric"
                        style={[styles.input, styles.halfInput, { marginRight: 20 }]} 
                        left={<TextInput.Icon icon={() => <Ionicons name="calendar" size={20} color="#6e6e6e" />} />}/>
                    <Menu
                        visible={sexMenuVisible}
                        onDismiss={() => setSexMenuVisible(false)}
                        anchor={
                            <TextInput
                                label="Sex"
                                mode="outlined"
                                editable={false}
                                value={sex}
                                style={[styles.input, styles.halfInput]}
                                left={<TextInput.Icon icon={() => <Ionicons name="transgender" size={20} color="#6e6e6e" />} />}
                                right={<TextInput.Icon icon="menu-down" size={50} onPress={() => setSexMenuVisible(true)} />}/>}>
                        <Menu.Item onPress={() => { setSex('Male'); setSexMenuVisible(false); }} title="Male" />
                        <Menu.Item onPress={() => { setSex('Female'); setSexMenuVisible(false); }} title="Female" />
                        <Menu.Item onPress={() => { setSex('Other'); setSexMenuVisible(false); }} title="Other" />
                    </Menu>
                </View>

                <Menu
                    visible={disabilityTypeMenuVisible}
                    onDismiss={() => setDisabilityTypeMenuVisible(false)}
                    anchor={
                        <TextInput
                            label="Type of Disability"
                            mode="outlined"
                            editable={false}
                            value={disabilityType}
                            style={styles.input}
                            left={<TextInput.Icon icon={() => <Ionicons name="accessibility" size={20} color="#6e6e6e" />} />}
                            right={<TextInput.Icon icon="menu-down" size={50} onPress={() => setDisabilityTypeMenuVisible(true)} />}/>}>
                    <Menu.Item onPress={() => { setDisabilityType('Visual Impairment'); setDisabilityTypeMenuVisible(false); }} title="Visual Impairment" />
                    <Menu.Item onPress={() => { setDisabilityType('Hearing Impairment'); setDisabilityTypeMenuVisible(false); }} title="Hearing Impairment" />
                    <Menu.Item onPress={() => { setDisabilityType('Speech Impairment'); setDisabilityTypeMenuVisible(false); }} title="Speech Impairment" />
                    <Menu.Item onPress={() => { setDisabilityType('Mobility Impairment'); setDisabilityTypeMenuVisible(false); }} title="Mobility Impairment" />
                    <Menu.Item onPress={() => { setDisabilityType('Cognitive Impairment'); setDisabilityTypeMenuVisible(false); }} title="Cognitive Impairment" />
                </Menu>

                <Menu
                    visible={disabilityDurationMenuVisible}
                    onDismiss={() => setDisabilityDurationMenuVisible(false)}
                    anchor={
                        <TextInput
                            label="Disabled for how long?"
                            mode="outlined"
                            editable={false}
                            value={disabilityDuration}
                            style={styles.input}
                            left={<TextInput.Icon icon={() => <Ionicons name="time" size={20} color="#6e6e6e" />} />}
                            right={<TextInput.Icon icon="menu-down" size={50} onPress={() => setDisabilityDurationMenuVisible(true)} />}/>}>
                    <Menu.Item onPress={() => { setDisabilityDuration('Less than a year'); setDisabilityDurationMenuVisible(false); }} title="Less than a year" />
                    <Menu.Item onPress={() => { setDisabilityDuration('1-3 years'); setDisabilityDurationMenuVisible(false); }} title="1-3 years" />
                    <Menu.Item onPress={() => { setDisabilityDuration('3-5 years'); setDisabilityDurationMenuVisible(false); }} title="3-5 years" />
                    <Menu.Item onPress={() => { setDisabilityDuration('5+ years'); setDisabilityDurationMenuVisible(false); }} title="5+ years" />
                </Menu>

                <TextInput
                    label="Contact Number"
                    mode="outlined"
                    value={contact}
                    onChangeText={(text) => {
                        const sanitized = text.replace(/\D/g, '').slice(0, 10);

                        if (sanitized.length > 0 && sanitized[0] !== '9') {
                            Alert.alert('Error', 'The number must start with 9 after the +63 country code.');
                        }

                        setContact(sanitized);
                    }}
                    keyboardType="phone-pad"
                    style={styles.input}
                    left={
                        <TextInput.Icon 
                            icon={() => (
                                <Text style={{ color: '#6e6e6e', marginLeft: 10 }}>+63</Text>)}/>} />

                <TextInput
                    label="Address"
                    mode="outlined"
                    value={address}
                    onChangeText={setAddress}
                    style={styles.input}
                    left={<TextInput.Icon icon={() => <Ionicons name="home" size={20} color="#6e6e6e" />} />}/>

                <Text style={styles.accountDetailsHeader}>Account Details:</Text>
                <TextInput
                    label="Email"
                    mode="outlined"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    left={<TextInput.Icon icon={() => <MaterialIcons name="person" size={20} color="#6e6e6e" />} />}/>

                <View style={styles.passwordField}>
                    <TextInput
                        label="Password"
                        mode="outlined"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!passwordVisible} 
                        style={styles.input}
                        left={<TextInput.Icon icon={() => <MaterialIcons name="lock" size={20} color="#6e6e6e" />} />}
                        right={
                            <TextInput.Icon
                                icon={() => (
                                    <Ionicons
                                        name={passwordVisible ? 'eye' : 'eye-off'}
                                        size={20}
                                        color="#6e6e6e"
                                    />
                                )}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            />
                        }
                    />
                </View>

                <Text style={styles.fileUploadText}>Upload your PWD ID here:</Text>
                <Button mode="outlined" onPress={handleFilePicker} style={styles.fileButton}>Choose File</Button>
                {pwdIdFile && <Text style={styles.fileText}>{pwdIdFile.name}</Text>}

                <HoverableButton
                    mode="contained"
                    style={styles.registerButton}
                    labelStyle={styles.registerButtonText}
                    onPress={handleRegister}
                    disabled={loading}>
                    {loading ? <ActivityIndicator color="#fff" size="small" /> : 'Register'}
                </HoverableButton>

                <Button
                    mode="text"
                    style={styles.loginRedirectButton}
                    onPress={() => navigation.navigate('LoginScreen')}>Already have an account? Login here.
                </Button>
            </View>
        </ScrollView>
    );
};

export default SignUp;
