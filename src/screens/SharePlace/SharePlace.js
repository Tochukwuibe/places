import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView } from 'react-native';
import { Actions } from '../../store/actions/root.actions'
import Menu from '../../widgets/Menu/Menu';
import MainText from '../../widgets/MainText/MainText';
import HeadingText from '../../widgets/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import PlaceInput from '../../components/PlaceInput/PlaceInput';

class SharePlace extends Component {


    state = { name: '' }

    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <Menu onPress={() => navigation.toggleDrawer()} />
        ),
    });


    onLogin = () => {
        this.props.navigation.navigate('Auth')
    }

    onAddPlace = () => {
        const name = this.state.name;
        if (!(!!name)) {return null;}
        const place = { name, key: Date.now().toString(), image: { uri: 'https://media.istockphoto.com/photos/art-summer-vacation-ocean-beach-picture-id510152502?k=6&m=510152502&s=612x612&w=0&h=dBUs641JFQv3yCxWRnFqG23k_atj7CHu7NxoT29Z2Y4=' } }
        console.log('the place ', place);
        this.props.dispatch(Actions.addPlace(place))
        this.setState({ name: '' })
    }


    onChange = (name) => {
        this.setState({ name })
    }

    onPickImage = () => {

    }

    onPickLocation = () => {

    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>

                    <MainText>
                        <HeadingText>Share a place with us!</HeadingText>
                    </MainText>

                    <PickImage onPress={this.onPickImage} />

                    <PickLocation onPress={this.onPickImage} />

                    <PlaceInput
                        onChange={this.onChange}
                        value={this.state.name}
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
