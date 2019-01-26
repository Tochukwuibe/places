import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const AppInput = ({onChangeText, name, value, error, ...rest}) => {
    // console.log('the value of the input ', value)

    const changeText = (value) => {
        if (!!name) {
            onChangeText({name, value});
        } else {
            onChangeText(value);
        }

       
    }

    return (
        <TextInput 
            onChangeText={changeText}
            underlineColorAndroid="transparent"
            value={value}
            {...rest}
            style={[styles.input, rest.style || {}, !!error ? styles.invalid : null]}
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
    },
    invalid: {
        borderColor: 'red',
        backgroundColor: '#f9c0c0'
    }
})
