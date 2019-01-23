import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux'
import BackButton from '../../widgets/BackButton/BackButton';
import { Actions } from '../../store/actions/root.actions';
import AppIcon from '../../widgets/AppIcon/AppIcon';


class PlaceDetail extends React.Component {


    state = { height: Dimensions.get('window').height }

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('place').name,
            headerLeft: (
                <BackButton
                    onPress={() => navigation.pop()}
                    title="Back"
                />
            )
        };
    };



    componentDidMount() {
        Dimensions.addEventListener('change', this.onDimensionsChange)
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
        const place = this.props.navigation.getParam('place');
        return (
            <View style={[styles.Container, this.state.height < 500 ? styles.landscapeContainer : styles.portirateContainer]}>

                {this.renderImg(place)}
                <View style={styles.subcontainer}>
                    {this.renderName(place)}
                    {this.renderBtn(place)}
                </View>


            </View>
        );
    }


    renderImg(place) {
        return (
            <View style={styles.subcontainer}>
                <Image source={place.image} style={styles.image} />
            </View>
        )
    }


    renderName(place) {
        return (
            <View style={styles.subcontainer}>
                <Text style={styles.name}>{place.name}</Text>
            </View>
        )
    }


    renderBtn(place) {
        return (
            <View style={styles.subcontainer}>
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

const styles = StyleSheet.create({
    Container: {
        margin: 22,
        padding: 20,
        flex: 1,
    },
    portirateContainer: {
        flexDirection: 'column'
    },
    landscapeContainer: {
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
    }
})

