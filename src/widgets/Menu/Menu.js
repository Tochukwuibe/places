import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import AppIcon from '../AppIcon/AppIcon';

const Menu = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <AppIcon style={{marginLeft: 10}} size={40} name="menu" color="orange" />
            </View>
        </TouchableOpacity>

    );
}

export default Menu;
