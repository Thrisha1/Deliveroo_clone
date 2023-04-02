import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity

} from "react-native";
import React, { useMemo, useState, useEffect, useLayoutEffect } from "react";

import * as Animatable from "react-native-animatable";

const OrderPlacing = () => {
    return (
        <SafeAreaView className="pt-10 flex-1 bg-[#5da6b0] items-center justify-center ">
            <Animatable.Image 
                source={require("../assets/loading2.gif")}
                iterationCount={1}
                className="w-96 h-96"
            />
            <Animatable.Text
                animation="slideInUp"
                iterationCount={1}
             className="text-2xl text-white"> Placing your order... </Animatable.Text>
        </SafeAreaView>
    )
}

export default OrderPlacing