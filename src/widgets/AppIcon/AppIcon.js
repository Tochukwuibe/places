import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native'

const AppIcon = ({name, ...rest}) => {
    let iconName = Platform.OS === 'android' ? `md-${name}` : `ios-${name}`;
    return (
        <Icon  name={iconName} {...rest} />
    );
}

export default AppIcon;
