// components/HoverableButton.jsx
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const HoverableButton = ({ children, onPress, style, labelStyle, mode }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Button
            mode={mode}
            onPress={onPress}
            style={[style,isPressed && styles.pressedButton,]}
            labelStyle={labelStyle}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}>{children}
        </Button>
    );
};

const styles = StyleSheet.create({
    pressedButton: {
        backgroundColor: '#D97706',
    },
});

export default HoverableButton;
