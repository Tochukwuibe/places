import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppIcon from '../../widgets/AppIcon/AppIcon';



const NavItem = ({ children, onPressed, icon }) => (
    <TouchableOpacity onPress={onPressed}>
        <View style={styles.ListItem}>
            <AppIcon name={icon} size={25} color="black"/>
            <Text style={styles.text}> {children}</Text>
        </View>
    </TouchableOpacity>

)


const styles = StyleSheet.create({
    ListItem: {
        width: '100%',
        padding: 15,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 5
    }
})

export default NavItem;
