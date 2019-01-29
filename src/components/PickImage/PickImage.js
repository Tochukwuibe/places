import React from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';



const PickImage = ({onPress, image}) => {
    console.log('the image ', image);
    return (
        <React.Fragment>
            <View style={styles.placeholder}>
                <Image style={styles.previewImg} source={image} />
            </View>

            <View style={styles.button}>
                <Button title="Pick Image" onPress={onPress} />
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

export default PickImage;
