import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import BackButton from '../../widgets/BackButton/BackButton';
import { Actions } from '../../store/actions/root.actions';
import AppIcon from '../../widgets/AppIcon/AppIcon';
import MapView from 'react-native-maps';


class PlaceDetail extends React.Component {


    state = { height: Dimensions.get('window').height }

    static navigationOptions = ({ navigation }) => {
        const place = navigation.getParam('place')
        return {
            title: !!place ? place.name : 'Loading...',
            headerLeft: (
                <BackButton
                    onPress={() => navigation.pop()}
                    title="Back"
                />
            )
        };
    };



    componentDidMount() {
        Dimensions.addEventListener('change', this.onDimensionsChange);
        this.props.navigation.setParams({ 'place': this.props.place });
    }

    componentWillUnmount() {
        Dimensions.removeEventListener('change', this.onDimensionsChange)
    }



    onDelete = (key) => {
        this.props.dispatch(Actions.deletePlace(key));
        this.props.navigation.pop();
    }

    onDimensionsChange = (data) => {
        console.log('dimensions changed ', data);
        this.setState({ height: data.window.height });
    }


    render() {
        console.log('the porps ', this.props)
        const place = this.props.place;
        const styles = stylesFn(this.state.height);
        console.log('the heigth ', this.state.height, styles)

        if (!place) return null;

        return (
            <View style={styles.container}>

                <View style={styles.subcontainer}>
                    {this.renderImg(place, styles)}
                </View>

                <View style={styles.subcontainer}>
                    {this.renderMap(place, styles)}
                </View>


                <View style={styles.subcontainer}>
                    {this.renderName(place, styles)}
                    {this.renderBtn(place, styles)}
                </View>

            </View>
        );
    }



    renderMap(place, styles) {

        
        return (
            <MapView
                initialRegion={place.location}
                style={styles.map}
            >
               <MapView.Marker coordinate={place.location} />

            </MapView>
        )

    }


    renderImg(place, styles) {
        return (
            <Image source={place.image} style={styles.image} />
        )
    }


    renderName(place, styles) {
        return (
            <View>
                <Text style={styles.name}>{place.name}</Text>
            </View>
        )
    }


    renderBtn(place, styles) {
        return (
            <View style={styles}>
                <TouchableOpacity onPress={() => this.onDelete(place.key)}>
                    <View style={styles.delete}>

                        <AppIcon size={30} name="trash" color="red" />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const stateToProps = ({ places: { selectedPlace } }) => ({ place: selectedPlace })

export default connect(stateToProps, null)(PlaceDetail);

const stylesFn = (height) => StyleSheet.create({
    container: {
        margin: 22,
        padding: 20,
        flex: 1,
        flexDirection: height < 500 ? 'row' : 'column'
    },
    landscapeContainer: {
        margin: 22,
        padding: 20,
        flexDirection: 'row'
    },
    image: {
        width: '100%',
        height: 200
    },
    name: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28
    },
    delete: {
        alignItems: 'center'
    },
    subcontainer: {
        flex: 1
    },
    map: {
        width: '100%',
        height: 200
    },
})

