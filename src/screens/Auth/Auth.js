import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator } from "react-navigation";
import AppInput from '../../widgets/AppInput/AppInput';
import HeadingText from '../../widgets/HeadingText/HeadingText';
import MainText from '../../widgets/MainText/MainText';
import background from '../../assets/background.jpg';
import AppButton from '../../widgets/AppButton/AppButton';


class Auth extends Component {


    onLogin = () => {
        this.props.navigation.navigate('Tabs')
    }

    render() {
        console.log('the props in auth ', this.props);

        return (

            <ImageBackground source={background} style={styles.backgroundImg}>

                <View style={styles.container}>


                    <MainText>
                        <HeadingText>Please Login </HeadingText>
                    </MainText>
                    <AppButton onPress={this.onLogin}>
                        Switch to login
                    </AppButton>

                    <View style={styles.inputContainer}>
                        <AppInput style={styles.input} placeholder="Your Email..." />
                        <AppInput style={styles.input} placeholder="Password..." />
                        <AppInput style={styles.input} placeholder="Confirm Password..." />
                    </View>

                    <AppButton onPress={this.onLogin}>
                        Submit 
                    </AppButton>


                </View>
            </ImageBackground>

        );
    }
}

export default createStackNavigator({ Auth: Auth });


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%'
    },

    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb'
    },
    backgroundImg: {
        width: '100%',
        height: '100%'
    }
})