import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import ImagePlaceholder from '../../assets/background.jpg';

const PickLocation = ({onPress}) => {
    return (
        <React.Fragment>
            <View style={styles.placeholder}>
                <Image style={styles.previewImg} source={ImagePlaceholder} />
            </View>

            <View style={styles.button}>
                <Button title="Locate me"  onPress={onPress } />
            </View>
        </React.Fragment> 
    );
}

const styles = StyleSheet.create({
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'grey',
        width: '80%',
        height: 150
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
