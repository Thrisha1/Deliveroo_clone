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
  import Ionicons from '@expo/vector-icons/Ionicons';
  import { useRoute, useNavigation } from '@react-navigation/native'
  import { useSelector } from 'react-redux'
  import {selectRestaurant} from '../features/basketSlice'
  import * as Progress from 'react-native-progress';
  import MapView, { Marker } from 'react-native-maps';

const Delivery = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant)
    // console.log(restaurant);
  return (
    <View className="pt-10 flex-1 bg-[#5da6b0]">
        <SafeAreaView className="z-50" >
      <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              className="  rounded-xl flex-row py-3 justify-between items-center bg-[#5da6b0]">
             <View className="flex-row w-full px-4 justify-between">
                <Ionicons name="arrow-back-outline" size={32} color="#fff" />
                <Text className="text-xl text-white font-light tracking-widest ">order help</Text>
             </View>
            </TouchableOpacity>
            <View className="bg-white m-4 p-3 ">
                <View className="flex-row justify-between">
                    <View>
                        <Text className="mb-3 text-gray-500">Estimated Arrival</Text>
                        <Text className="font-black text-4xl" >45-55 Minutes</Text>
                    </View>
                    <Image 
                    source={require("../assets/boy.png")}
                    iterationCount={1}
                    className="w-20 h-20"
                    />
                </View>
                <Progress.Bar size={30} color="#5da6b0" indeterminate={true} />
                <Text className="mt-3 text-gray-500">
                    Your Oder at {restaurant.title} is being prepared
                </Text>
            </View>
    </SafeAreaView>
    <MapView 
        className="flex-1 -mt-12 z-0"
        maptype="autostandard"
        initialRegion={{
            latitude: 9.98211489003,
            longitude: 76.28290838,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            }}
    >
      <Marker
        coordinate={{
          latitude: 9.98211489003,
          longitude: 76.28290838,
        }}
        title={restaurant.title}
        description={restaurant.description}
        identifier="Your Location"
        pinColor="red"
      />

    </MapView>
    <SafeAreaView className="flex-row space-x-3 items-center bg-white h-20">
          <Image
            source={require("../assets/boy.png")}
            className="w-12 h-12 p-4 rounded-full ml-5 bg-gray-300"
          />
          <View className="flex-1">
            <Text className="text-lg ml-2">Rinshad</Text>
            <Text className="text-gray-500 ml-2">Your Rider</Text>
          </View>
          <Text className="font-bold text-lg mr-5 text-[#5da6b0]">Call</Text>

    </SafeAreaView>
    </View>
  )
}

export default Delivery