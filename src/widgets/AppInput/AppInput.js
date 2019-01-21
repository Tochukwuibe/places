import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const AppInput = (props) => {
    return (
        <TextInput 
            underlineColorAndroid="transparent"
            {...props}
            style={[styles.input, props.style || {}]}
        />
    );
}

export default AppInput;

const styles = StyleSheet.create({
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#eee',
        padding: 5,
        margin: 8,
    }
})
