import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, Image } from 'react-native'


const ListItem = ({ children, itemPressed, image }) => (
    <TouchableOpacity onPress={itemPressed}>
        <View style={styles.ListItem}>
            <Image style={styles.image} source={image} />
            <Text> {children}</Text>
        </View>
    </TouchableOpacity>

)


const styles = StyleSheet.create({
    ListItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 8
    }
})

export default ListItem;
