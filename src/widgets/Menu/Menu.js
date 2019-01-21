import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Menu = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Icon style={{marginLeft: 10}} size={40} name="md-menu" color="grey" />
            </View>
        </TouchableOpacity>

    );
}

export default Menu;
