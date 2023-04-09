import React from "react";
import {Text, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

const HomeScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <SafeAreaView style={{flex: 1}}>
                <Text>HomeScreen</Text>
            </SafeAreaView>
        </View>
    );
}

export default HomeScreen;
