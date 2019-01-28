import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
import Menu from '../../widgets/Menu/Menu';
import {Actions} from '../../store/actions/root.actions';



class FindPlace extends Component {

    state = {
        placesLoaded: false,
        removeAmin: new Animated.Value(1),
        fadeinAmin: new Animated.Value(0)
    }

    dispatch = this.props.dispatch;

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <Menu onPress={() => navigation.toggleDrawer()} />
        ),
    });



    onLogin = () => {

    }

    onSelected = (key) => {
        const place = this.props.places.find(place => place.key === key)
        this.dispatch(Actions.selectPlace(place));
        this.props.navigation.navigate('PlaceDetail');
    }

    onLoadPlaces = () => {
        Animated.timing(this.state.removeAmin, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
        }).start(() => {

            this.setState({ placesLoaded: true })
            this.onPlacesLoaded();

        });
    }

    onPlacesLoaded = () => {
        Animated.timing(this.state.fadeinAmin, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    render() {

        let content = this.renderSearchButton();

        if (this.state.placesLoaded) {
            content = (
                <Animated.View style={{
                    opacity: this.state.fadeinAmin
                }}>
                    <PlaceList
                        places={this.props.places}
                        onSelected={this.onSelected}
                    />
                </Animated.View>
            )
        }


        return <View style={this.state.placesLoaded ? null : styles.buttonContainer}>{content}</View>;
    }



    renderSearchButton() {
        return (
            <Animated.View style={{
                opacity: this.state.removeAmin,
                transform: [
                    { scale: this.state.removeAmin.interpolate({ inputRange: [0, 1], outputRange: [12, 1] }) }
                ]
            }}>
                <TouchableOpacity onPress={this.onLoadPlaces}>
                    <View style={styles.searchButton}>
                        <Text style={styles.searchBtnText}>Find Places</Text>
                    </View>
                </TouchableOpacity>
            </Animated.View>

        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButton: {
        borderColor: 'orange',
        borderRadius: 50,
        padding: 20,
        borderWidth: 3
    },
    searchBtnText: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 26
    }
})

const stateToProps = ({ places: { places } }) => ({ places });

export default connect(stateToProps, null)(FindPlace);
