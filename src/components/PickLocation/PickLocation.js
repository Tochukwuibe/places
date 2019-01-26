import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


const PickLocation = ({ onPress, location }) => {
    return (
        <React.Fragment>
            <MapView 
                initialRegion={location}
                style={styles.map}
            />

            <View style={styles.button}>
                <Button title="Locate me" onPress={onPress} />
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: 250
    },
    button: {
        margin: 8
    },
    previewImg: {
        width: '100%',
        height: '100%'
    }
})


export default PickLocation;
