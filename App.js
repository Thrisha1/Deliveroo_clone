import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet, Text, View} from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import BasketScreen from "./screens/BasketScreen";
import store from './store'
import { Provider } from 'react-redux'
import DummyScreen from './screens/DummyScreen.jsx'
import OrderPlacing from './screens/OrderPlacing.jsx'

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Provider store={store}>
            <Stack.Navigator>
                <Stack.Screen name="Home"component={HomeScreen}/>
                <Stack.Screen name="Restaurant"component={RestaurantScreen}/>
                <Stack.Screen name="Basket"component={BasketScreen}/>
                <Stack.Screen name="Dummy"component={DummyScreen}/>
                <Stack.Screen name="OrderPlacing"component={OrderPlacing} options={{ presentation:"fullScreenModal",headerShown:false }}/>
            </Stack.Navigator>
            </Provider>
        </NavigationContainer>
    );
}
