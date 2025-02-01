import React from "react";
import * as SplashScreen from 'expo-splash-screen';
import {Provider} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {persistor, store} from "@Redux/store";
import {StatusBar, StatusBarStyle} from "react-native";
import {PersistGate} from 'redux-persist/integration/react';
import i18n from "i18next";

import './src/translations/translations';
import useThemeColors from "@Hooks/useThemeColors";
import Navigation from "@Navigation/Navigation";
import ErrorBoundary from "react-native-error-boundary";
import FallbackComponent from "@Components/FallbackComponent";
import {getLocales} from "expo-localization";
import LANGS from "@Translations/Languages";

SplashScreen.setOptions({
    duration: 1000,
    fade: true,
});

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
        <ErrorBoundary FallbackComponent={FallbackComponent}>
            <Provider store={store}>
                <PersistGate persistor={persistor} onBeforeLift={() => {
                    try {
                        const savedLanguage = store.getState().app.language
                        if (savedLanguage) {
                            /* set saved language */
                            i18n.changeLanguage(savedLanguage);
                        } else {
                            /* set language from phone */
                            const phoneLanguage = getLocales()[0].languageCode;
                            if (phoneLanguage && phoneLanguage in LANGS) {
                                i18n.changeLanguage(phoneLanguage);
                            }
                        }
                    } catch (e) {
                    }
                }}>
                    <NavigationContainer>
                        {/* status bar */}
                        <StatusBar
                            backgroundColor={COLORS.background}
                            barStyle={COLORS.barStyle as StatusBarStyle}
                        />
                        <Navigation/>
                    </NavigationContainer>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    );
}
