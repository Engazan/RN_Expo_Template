import {Provider} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {store} from "./src/redux/store";
import Navigation from "./src/navigation/Navigation";

import './src/translations/translations';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </Provider>
    );
}
