import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
import Menu from '../../widgets/Menu/Menu';



class FindPlace extends Component {

    static navigationOptions = ({navigation}) => ( {
        headerLeft: (
            <Menu  onPress={() => navigation.toggleDrawer()}/>
        ),
      });



    onLogin = () => {

    }

    onSelected = (key) => {
        const place = this.props.places.find(place => place.key === key)
        this.props.navigation.navigate('PlaceDetail', {place})
    }

    render() {
        console.log('the porps in find ', this.props);
        return (
            <View>
                <PlaceList
                    places={this.props.places}
                    onSelected={this.onSelected}
                />
            </View>
        );
    }
}

const stateToProps = ({ places: { places } }) => ({ places })

export default connect(stateToProps, null)(FindPlace);
