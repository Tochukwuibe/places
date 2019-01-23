import React from 'react';
import { View, TouchableOpacity, TouchableNativeFeedback, Text, StyleSheet, Platform } from 'react-native';

const AppButton = ({ children, onPress, color }) => {

    const content = (
        <View style={[styles.button, { backgroundColor: color || "#29aaf4" }]}>
            <Text>{children}</Text>
        </View>
    )

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={onPress}>
                {content}
            </TouchableNativeFeedback>
        )
    }

    return (
           <TouchableOpacity onPress={onPress}>
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
    }
})

export default AppButton;



