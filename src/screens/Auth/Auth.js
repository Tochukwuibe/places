import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ImageBackground } from 'react-native';
import { createStackNavigator } from "react-navigation";
import AppInput from '../../widgets/AppInput/AppInput';
import HeadingText from '../../widgets/HeadingText/HeadingText';
import MainText from '../../widgets/MainText/MainText';
import background from '../../assets/background.jpg';
import AppButton from '../../widgets/AppButton/AppButton';
import validate from '../../utils/validation';


class Auth extends Component {


    state = {
        heigth: Dimensions.get('window').height,
        controls: {
            email: this.createControl('', { email: true }),
            password: this.createControl('', { minLenght: 6 }),
            confirm: this.createControl('', { match: 'password' })
        }
    }

    componentDidMount() {
        Dimensions.addEventListener('change', this.dimensionsListener)
    }

    dimensionsListener = (data) => {
        this.setState({ heigth: data.window.height });
    }


    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.dimensionsListener);
    }

    onLogin = () => {
        this.props.navigation.navigate('Tabs')
    }

    onChangeText = ({ name, value }) => {
        let match = {};

        if (this.state.controls[name].validation.match) {
            const matchControlName = this.state.controls[name].validation.match
            const matchValue = this.state.controls[matchControlName].value;
            match = { ...match, [matchControlName]: matchValue }
            console.log('the match ', match)
        }

        this.setState(({ controls }) => ({
            controls: {
                ...controls,
                [name]: {
                    ...controls[name],
                    value,
                    valid: validate(value, controls[name].validation, match)
                }
            }
        }));

    }

    createControl(value, validation) {
        return {
            value,
            valid: false,
            validation
        }
    }


    render() {

        const styles = stylesFn(this.state.heigth);

        let Heading = null;

        if (Dimensions.get('window').height > 500) {
            Heading = (
                <MainText>
                    <HeadingText>Please Login </HeadingText>
                </MainText>
            )
        }

        return (

            <ImageBackground source={background} style={styles.backgroundImg}>

                <View style={styles.container}>

                    {Heading}

                    <AppButton onPress={this.onLogin}>
                        Switch to login
                    </AppButton>

                    <View style={styles.inputContainer}>
                        <AppInput style={styles.input} name="email" onChangeText={this.onChangeText} value={this.state.controls.email.value} placeholder="Your Email..." />

                        <View style={styles.passwordContainer}>
                            <View style={styles.passwordWrapper}>
                                <AppInput style={styles.input} name="password" onChangeText={this.onChangeText} value={this.state.controls.password.value} placeholder="Password..." />
                            </View>

                            <View style={styles.passwordWrapper}>
                                <AppInput style={styles.input} name="confirm" onChangeText={this.onChangeText} value={this.state.controls.confirm.value} placeholder="Confirm Password..." />
                            </View>

                        </View>

                    </View>

                    <AppButton onPress={this.onLogin}>
                        Submit
                    </AppButton>


                </View>
            </ImageBackground>

        );
    }
}

export default createStackNavigator({ Auth: { screen: Auth }, }, { headerMode: 'none' });


const stylesFn = (height) => StyleSheet.create({
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
    },
    passwordContainer: {
        flexDirection: height > 500 ? 'column' : 'row',
        justifyContent: 'space-between'
    },
    passwordWrapper: {
        width: height > 500 ? '100%' : '45%'
    }
})