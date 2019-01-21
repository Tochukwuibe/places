import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import BackButton from '../../widgets/BackButton/BackButton';
import {Actions} from '../../store/actions/root.actions';


class PlaceDetail extends React.Component {

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




    onDelete = (key) => {
        this.props.dispatch(Actions.deletePlace(key))
        this.props.navigation.pop()
    }


    render() {
        console.log('the porps ', this.props)
        const place = this.props.navigation.getParam('place');
        return (
            <View style={styles.Container}>
            <Image source={place.image} style={styles.image} />
            <Text style={styles.name}>{place.name}</Text>
            <View>
    
                <TouchableOpacity onPress={() => this.onDelete(place.key)}>
                    <View style={styles.delete}>
    
                        <Icon size={30} name="md-trash" color="red" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const stateToProps = ({places: {selectedPlace}}) => ({place: selectedPlace})

export default connect(stateToProps, null)(PlaceDetail);

const styles = StyleSheet.create({
    Container: {
        margin: 22,
        padding: 20

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
    }
})

