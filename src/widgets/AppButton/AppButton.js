import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native'

const AppButton = ({children, onPress, color}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, {backgroundColor: color || "#29aaf4"}]}>
                <Text>{children}</Text>
            </View>
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



