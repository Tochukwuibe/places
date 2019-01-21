import React from 'react';
import ListItem from '../ListItem/ListItem';
import { StyleSheet, FlatList } from 'react-native';

const PlaceList = ({ places, onSelected }) => {
    return (

        <FlatList style={styles.listContainer}
            data={places}
            renderItem={({item: {name, key, image}}) => (<ListItem  image={image} itemPressed={() => onSelected(key)}  >{name}</ListItem>)}
        />
    );
}

export default PlaceList;

const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});
