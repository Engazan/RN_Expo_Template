import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons';
import {useTranslation} from "react-i18next";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import useThemeColors from "../hooks/useThemeColors";

const MainNavigationStack = createNativeStackNavigator();
const MainNavigationBottomTab = createBottomTabNavigator();

const MainNavigationBottomTabNavigator = () => {

    const COLORS = useThemeColors();
    const i18n = useTranslation();

    return (
        <MainNavigationBottomTab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.text.interactive,
                tabBarInactiveTintColor: COLORS.text.secondary,
                tabBarStyle: {
                    backgroundColor: COLORS.background2,
                    borderTopWidth: 0,
                },
            }}
            initialRouteName="InvoicesStack"
        >

            <MainNavigationBottomTab.Screen
                name={i18n.t('navigation.mainNavigation.home')}
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
