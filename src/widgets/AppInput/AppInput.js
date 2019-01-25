import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const AppInput = ({onChangeText, name, ...rest}) => {

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
            {...rest}
            style={[styles.input, rest.style || {}]}
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
