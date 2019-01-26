import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Text, StyleSheet, Platform } from 'react-native';

const AppButton = ({ children, onPress, color, disabled }) => {
    console.log('the disabled ', disabled)
    const content = (
        <View style={[styles.button, { backgroundColor: color || "#29aaf4" }, !!disabled ? styles.disabled : null]}>
            <Text style={!!disabled ? styles.disabledText : null}>{children}</Text>
        </View>
    )

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback disabled={!!disabled} onPress={onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    }

    return (
        <TouchableOpacity disabled={!!disabled} onPress={onPress}>
            {content}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    disabled: {
        backgroundColor: '#eee',
        borderColor: '#aaa'
    },
    disabledText: {
        color: '#aaa',
    }
})

export default AppButton;



