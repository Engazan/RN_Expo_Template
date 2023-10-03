import React from "react";
import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import useThemeColors from "../hooks/useThemeColors";
import TextUI from "../components/ui/TextUI";

const HomeScreen = () => {

    const COLORS = useThemeColors();

    return (
        <View style={{flex: 1, backgroundColor: COLORS.background}}>
            <SafeAreaView style={{flex: 1}}>
                <TextUI text="HOME Screen" />
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;
