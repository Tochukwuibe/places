import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import SharePlace from '../SharePlace/SharePlace';
import FindPlace from '../FindPlace/FindPlace';


import { SafeAreaView } from 'react-native';
import NavItem from '../../components/NavItem/NavItem';
import AppIcon from '../../widgets/AppIcon/AppIcon';



defaultNavigationOptions = ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Find') {
            iconName = `map`;
            // Sometimes we want to add badges to some icons. 
            // You can check the implementation below.

        } else if (routeName === 'Share') {
            iconName = `share`;
        }


        // You can return any component that you like here!
        return <AppIcon name={iconName} size={25} color={tintColor} />;
    }
})






const TabNavigator = createBottomTabNavigator({
    Find: createStackNavigator({ FindPlace: FindPlace }),
    Share: createStackNavigator({ sharePlace: SharePlace })
}, {
        defaultNavigationOptions,
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            
        }
    });






const contentComponent = (props) => (
    <SafeAreaView>
        <DrawerItems {...props} />
        <NavItem icon="log-out" onPressed={() => props.navigation.navigate('Auth')} >Logout</NavItem>
    </SafeAreaView>
);



const sideDrawer = createDrawerNavigator({
    Home: TabNavigator
},{ contentComponent}
)


export default sideDrawer;
