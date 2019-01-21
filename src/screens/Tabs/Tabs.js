import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import SharePlace from '../SharePlace/SharePlace';
import FindPlace from '../FindPlace/FindPlace';
import Icon from 'react-native-vector-icons/Ionicons';



defaultNavigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Find') {
            iconName = `md-map`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.

        } else if (routeName === 'Share') {
            iconName = `md-share`;
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
    }
})



const TabNavigator = createBottomTabNavigator({
    Find: createStackNavigator({ FindPlace: FindPlace }),
    Share: createStackNavigator({ sharePlace: SharePlace })
},{
    defaultNavigationOptions,
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});

const sideDrawer = createDrawerNavigator({
    Home: TabNavigator
})


export default sideDrawer;
