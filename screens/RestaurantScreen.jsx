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
import {useRoute,useNavigation} from '@react-navigation/native'
import React, {useLayoutEffect, useState, useEffect} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { urlFor } from '../sanity'
import DishRow from '../components/DishRow.jsx'
import Basket from '../components/Basket.jsx'
import { useDispatch } from 'react-redux';
import {setRestaurant} from '../features/basketSlice'

const RestaurantScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { params:{
    img,
    title,
    id,
    rating,
    short_desc,
    address,
    dishes
  }} = useRoute();

  useEffect(() => {
    dispatch(setRestaurant({ 
      img,
      title,
      id,
      rating,
      short_desc,
      address,
      dishes
    }))
  }, []);

  // console.log(dishes[0].short_description);

    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [])

  return (
    <>
    <ScrollView className="relative">
      <SafeAreaView className="relative" >
        <Image
         source={{uri:urlFor(img).url()}}
         className="w-100 h-56 bg-gray-300 p-4"
         />
         <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="absolute top-10 left-4 bg-white rounded-full"> 
            <Ionicons name="arrow-back-outline" size={32} color="#111"  />
         </TouchableOpacity>
         <View className=" bg-white p-3" >
            <Text className="text-2xl font-medium tracking-widest ">{title}</Text>
            <View className="flex-row mt-2">
              <Ionicons name="star" size={20} opacity={0.5} color="green"  />
              <Text className="text-lg ml-1 font-medium text-green-6  00">{rating}</Text>
                <View className="flex-row ml-2">
                  <Ionicons name="location" size={20} opacity={0.5} color="green"  />
                  <Text className="text-lg font-medium ml-1">{address}</Text>
                </View>
            </View>
                <View className="flex-row mt-2">
                  <Text className="text-lg font-extralight text-gray-500 ">{short_desc}</Text>
                </View>
         </View>
         <TouchableOpacity className="bg-white mt-[1] p-3" >
            <View className="flex-row mt-4 items-center">
              <Ionicons name="call" size={20} opacity={0.5} color="green"  /> 
              <Text className="text-xl font-medium tracking-widest mx-3 ">Have a Food Allergy?</Text>
                <View className="flex-row ml-24">
                  <Ionicons name="chevron-forward-outline" size={24} opacity={0.5} color="green"  />
                </View>
             </View> 
         </TouchableOpacity>
         <View className="p-3 justify-center">
            <Text className="text-2xl font-medium tracking-widest ">Menu</Text>
         </View>
          {/* dishes */}
          {
            dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              image={dish.image}
              name={dish.name}
              price={dish.price}
              description={dish.short_description}
            />
          ))}

      </SafeAreaView>
    </ScrollView>
      <Basket/>
    </>
  )
}

export default RestaurantScreen