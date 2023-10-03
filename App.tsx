import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import {Provider} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {store} from "./src/redux/store";
import Navigation from "./src/navigation/Navigation";
import {StatusBar} from "react-native";
import useThemeColors from "./src/hooks/useThemeColors";

import './src/translations/translations';

export default function App() {

    const COLORS = useThemeColors();

    const [appIsReady, setAppIsReady] = React.useState(false);

    React.useEffect(() => {
        async function prepare() {

            setAppIsReady(true);
        }

        prepare();
    }, []);

    const onLayoutRootView = React.useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                {/* status bar */}
                <StatusBar
                    backgroundColor={COLORS.background}
                    barStyle={COLORS.barStyle}
                />
                <Navigation/>
            </NavigationContainer>
        </Provider>
    );
}
