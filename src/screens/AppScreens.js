
import { createAppContainer, createSwitchNavigator, createStackNavigator } from "react-navigation";
import Auth from "./Auth/Auth";

import Tabs from "./Tabs/Tabs";
import PlaceDetail from "../screens/PlaceDetail/PlaceDetail";
import AuthLoading from "./AuthLoading/AuthLoading";



const mainAppStack = createSwitchNavigator(
    {
        Auth: Auth,
        Tabs: Tabs,
        AuthLoading: AuthLoading
    },
    {
        initialRouteName: 'AuthLoading'
    }
)


const modalStack = createStackNavigator({
    PlaceDetail: PlaceDetail
})


const appNavigator = createStackNavigator(
    {
        Main: mainAppStack,
        Modal: modalStack
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
)



export default createAppContainer(appNavigator);

