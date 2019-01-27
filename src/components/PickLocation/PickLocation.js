import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


const PickLocation = ({ onPickLocation, onCurrentLocation , mapRef, location, showMarker }) => {



    let marker = null;
    if (showMarker) {
        marker = (
            <MapView.Marker coordinate={location} />

        )
    }

    return (
        <React.Fragment>
            <MapView
                initialRegion={location}
                // region={location}
                style={styles.map}
                onPress={onPickLocation}
                ref={(ref) => mapRef(ref)}
            >
                {marker}

            </MapView>

            <View style={styles.button}>
                <Button title="Locate me" onPress={onCurrentLocation} />
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
