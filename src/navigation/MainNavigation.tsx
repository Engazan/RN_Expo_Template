import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import {useTranslation} from "react-i18next";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import {COLORS} from "../helpers/COLORS";

const MainNavigationStack = createNativeStackNavigator();
const MainNavigationBottomTab = createBottomTabNavigator();

const MainNavigationBottomTabNavigator = () => {

    const i18n = useTranslation();

    return (
        <MainNavigationBottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: 'gray',
            }}
            initialRouteName="InvoicesStack"
        >

            <MainNavigationBottomTab.Screen
                name={i18n.t('authNavigation.documents')}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home" size={size} color={color}/>
                    ),
                }}
            />

        </MainNavigationBottomTab.Navigator>
    )
}

const MainNavigation = () => {

    const i18n = useTranslation();

    return (
        <MainNavigationStack.Navigator>
            <MainNavigationStack.Screen name="AuthMain" component={MainNavigationBottomTabNavigator} options={{headerShown: false}} />
            {/*<MainNavigationStack.Screen name="StackNavigation" component={StackNavigation} options={{headerShown: false}} />*/}
        </MainNavigationStack.Navigator>
    );
}

export default MainNavigation;
