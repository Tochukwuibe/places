import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView, Dimensions, Platform, ImagePickerIOS } from 'react-native';
import { Actions } from '../../store/actions/root.actions'
import Menu from '../../widgets/Menu/Menu';
import MainText from '../../widgets/MainText/MainText';
import HeadingText from '../../widgets/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlace extends Component {

    initialState = {
        location: {
            latitude: 37.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
        },
        locationPicked: false,
        image: { uri: '' }
    }

    state = { ...this.initialState };

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
        const place = {
            name,
            key: Date.now().toString(),
            image: { uri: this.state.image.url },
            location: this.state.location
        }
        this.props.dispatch(Actions.addPlace(place))
        this.setState({ ...this.initialState })
    }


    onPickImage = () => {
        console.log('picking image')
        if (Platform.OS === 'ios') {

            ImagePickerIOS.openSelectDialog({}, uri => {
                console.log('the image url ', uri)
                this.setState({ image: { uri } });
            }, error => {});

        } else {

        }
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
                        coordinate: {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude
                        }
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
        console.log('the state ', this.state)
        return (
            <ScrollView>
                <View style={styles.container}>

                    <MainText>
                        <HeadingText>Share a place with us!</HeadingText>
                    </MainText>

                    <PickImage
                        onPress={this.onPickImage}
                        image={this.state.image}
                    />

                    <PickLocation
                        location={this.state.location}
                        onCurrentLocation={this.onCurrentLocation}
                        onPickLocation={this.onPickLocation}
                        showMarker={this.state.locationPicked}
                        mapRef={(ref) => this.mapRef = ref}
                    />

                    <PlaceInput
                        onAdd={this.onAddPlace}
                        disabled={!this.state.locationPicked}
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
