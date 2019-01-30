import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, ImageBackground, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createStackNavigator } from "react-navigation";
import { Formik, Field } from 'formik';

import AppInput from '../../widgets/AppInput/AppInput';
import HeadingText from '../../widgets/HeadingText/HeadingText';
import MainText from '../../widgets/MainText/MainText';
import background from '../../assets/background.jpg';
import AppButton from '../../widgets/AppButton/AppButton';
import { emailValidator, minLenghtValidator, matchValidator } from '../../utils/validation';
import { connect } from 'react-redux';
import { Actions } from '../../store/actions/auth.actions';
import firebase from 'react-native-firebase';


class Auth extends Component {

    state = { heigth: Dimensions.get('window').height, mode: 'login' }
    dispatch = this.props.dispatch;

    componentDidMount() {
        Dimensions.addEventListener('change', this.dimensionsListener)
    }

    dimensionsListener = (data) => {
        this.setState({ heigth: data.window.height });
    }

    onToggleMode = () => this.setState(({ mode }) => ({ mode: mode === 'login' ? 'signUp' : 'login' }));

    onLogin = ({ email, password }) => {
        const data = { email, password };
        
        firebase.auth().signInAnonymously().then(() =>  this.dispatch(Actions.login(data, () => this.props.navigation.navigate('Tabs'))))
       
    }

    render = () => {
        const state = {
            ...this.state,
            onLogin: this.onLogin,
            onToggleMode: this.onToggleMode
        }
        return <Render {...state} />

    }


    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.dimensionsListener);
    }

}







const Render = ({ heigth, onLogin, onToggleMode, mode }) => {
    const styles = stylesFn(heigth, mode);

    let Heading = null;

    if (heigth > 500) {
        Heading = (
            <MainText>
                <HeadingText>{mode === 'signUp' ? 'Please Login' : 'Please Signup'} </HeadingText>
            </MainText>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>


                <ImageBackground source={background} style={styles.backgroundImg}>

                    <KeyboardAvoidingView style={styles.container} behavior="padding">

                        {Heading}

                        <AppButton onPress={onToggleMode}>
                            {mode === 'signUp' ? 'Switch to login' : 'Switch to SignUp'}
                        </AppButton>

                        <Form styles={styles} mode={mode} onLogin={onLogin} />



                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>

        </TouchableWithoutFeedback>
    );
}









const Form = ({ styles, onLogin, mode }) => (


    <Formik
        initialValues={{ email: '', password: '', confirm: '' }}
        onSubmit={onLogin}
    >
        {({ values, errors, touched, setFieldTouched, isValid }) => (

            <React.Fragment>

                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <View style={styles.inputContainer}>

                    <Field
                        name="email"
                        validate={emailValidator}

                    >
                        {
                            ({ field: { onChange, value: { email } } }) => (
                                <React.Fragment>
                                    <AppInput
                                        style={styles.input}
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        error={errors.email && touched.email}
                                        onBlur={() => setFieldTouched('email')}
                                        onChangeText={onChange('email')} value={email} placeholder="Your Email..." />

                                    {
                                        errors.email && touched.email && <View>
                                            <Text>Email is required</Text>
                                        </View>
                                    }

                                </React.Fragment>

                            )
                        }
                    </Field>



                    <View style={styles.passwordContainer}>

                        <Field
                            name="password"
                            validate={minLenghtValidator(6)}
                        >
                            {
                                ({ field: { onChange, value: { password } } }) => (
                                    <View style={styles.passwordWrapper}>
                                        <AppInput
                                            style={styles.input}
                                            onBlur={() => setFieldTouched('password')}
                                            error={errors.password && touched.password}
                                            onChangeText={onChange('password')}
                                            value={password} placeholder="Password..."
                                            secureTextEntry={true}
                                        />

                                    </View>
                                )
                            }
                        </Field>


                        {
                            mode === 'signUp' && <Field
                                name="confirm"
                                validate={matchValidator(values.password)}
                            >

                                {
                                    ({ field: { onChange, value: { confirm } } }) => (
                                        <View style={styles.passwordWrapper}>
                                            <AppInput
                                                style={styles.input}
                                                onBlur={() => setFieldTouched('confirm')}
                                                error={errors.confirm && touched.confirm}
                                                onChangeText={onChange('confirm')}
                                                value={confirm}
                                                placeholder="Confirm Password..."
                                                secureTextEntry={true}
                                            />

                                        </View>
                                    )
                                }

                            </Field>

                        }

                    </View>




                </View>

                {/* </TouchableWithoutFeedback> */}
                <AppButton disabled={!isValid} onPress={onLogin}>
                    Submit
                </AppButton>

            </React.Fragment>

        )}
    </Formik>


)







const stylesFn = (height, mode) => StyleSheet.create({
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
        flexDirection: height > 500 || mode === 'login' ? 'column' : 'row',
        justifyContent: 'space-between'
    },
    passwordWrapper: {
        width: height > 500 || mode === 'login' ? '100%' : '45%'
    },

})


const stateToProps = ({ auth }) => ({ ...auth })

const screen = connect(stateToProps, null)(Auth)

export default createStackNavigator({ Auth: { screen }, }, { headerMode: 'none' });


