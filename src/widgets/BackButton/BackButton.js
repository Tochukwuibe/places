import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const BackButton = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon size={30} name="md-arrow-dropleft" color="blue" />
                <Text style={{color: 'blue'}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BackButton;


const styles  = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})


