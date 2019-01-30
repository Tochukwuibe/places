import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native'
import firebase from 'react-native-firebase';

class AuthLoading extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
           this.props.navigation.navigate(!!user ? 'Tabs' : 'Auth');
        })
    }



    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }
}

export default AuthLoading;
