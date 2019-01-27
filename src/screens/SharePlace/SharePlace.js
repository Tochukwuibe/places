import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Actions } from '../../store/actions/root.actions'
import Menu from '../../widgets/Menu/Menu';
import MainText from '../../widgets/MainText/MainText';
import HeadingText from '../../widgets/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlace extends Component {


    state = {
        location: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
        },
        locationPicked: false
    }

    mapRef = null;

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <Menu onPress={() => navigation.toggleDrawer()} />
        ),
    });


    onLogin = () => {
        this.props.navigation.navigate('Auth')
    }

    onAddPlace = (name) => {
        if (!(!!name)) { return null; }
        const place = { name, key: Date.now().toString(), image: { uri: 'https://media.istockphoto.com/photos/art-summer-vacation-ocean-beach-picture-id510152502?k=6&m=510152502&s=612x612&w=0&h=dBUs641JFQv3yCxWRnFqG23k_atj7CHu7NxoT29Z2Y4=' } }
        this.props.dispatch(Actions.addPlace(place))
        this.setState({ name: '' })
    }


    onChange = (name) => {
        this.setState({ name })
    }

    onPickImage = () => {

    }

    onPickLocation = ({ nativeEvent: { coordinate: { latitude, longitude } } }) => {


        if (this.mapRef) {

            this.mapRef.animateToRegion({
                ...this.state.location,
                latitude,
                longitude
            })
        }

        this.setState((state) => ({
            location: {
                ...state.location,
                latitude,
                longitude
            },
            locationPicked: true
        }))
    }

    onCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {

                const event = {
                    nativeEvent: {
                        latitude:  pos.coords.latitude,
                        longitude: pos.coords.longitude
                    }
                }

                this.onPickLocation(event);
            },
            (err) => {
                console.log('the error ', err);
            }
        );
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <MainText>
                        <HeadingText>Share a place with us!</HeadingText>
                    </MainText>

                    <PickImage onPress={this.onPickImage} />

                    <PickLocation
                        location={this.state.location}
                        onCurrentLocation={this.onCurrentLocation}
                        onPickLocation={this.onPickLocation}
                        showMarker={this.state.locationPicked}
                        mapRef={(ref) => this.mapRef = ref}
                    />

                    <PlaceInput
                        onAdd={this.onAddPlace}
                    />

                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
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


const stateToProps = ({ places }) => ({ ...places })

export default connect(stateToProps, null)(SharePlace);
