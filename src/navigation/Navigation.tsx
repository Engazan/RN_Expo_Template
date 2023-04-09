import React from "react";
import {RootState} from "../redux/store";
import {useSelector} from "react-redux";
import MainNavigation from "./MainNavigation";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const RootNavigationStack = createNativeStackNavigator();

const Navigation = () => {

    const {token} = useSelector((state: RootState) => state.auth);

    return (
        <RootNavigationStack.Navigator>
            {/*{token === null ? (
                <RootNavigationStack.Screen name="NotAuthenticatedNavigation" component={NotAuthenticatedNavigation} options={{headerShown: false}}/>
            ) : (
                <RootNavigationStack.Screen name="AuthenticatedNavigation" component={AuthenticatedNavigation} options={{headerShown: false}}/>
            )}*/}
            <RootNavigationStack.Screen name="AuthenticatedNavigation" component={MainNavigation} options={{headerShown: false}}/>
        </RootNavigationStack.Navigator>
    )
}

export default Navigation;
