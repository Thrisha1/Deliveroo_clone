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
  import { useRoute, useNavigation } from '@react-navigation/native'
  import { useDispatch, useSelector } from 'react-redux';
  import { selectRestaurant } from '../features/basketSlice'
  import { selctItems, remove, removeAll,addQty,totalprice,deliverFee } from '../features/counterSlice';
  import Ionicons from '@expo/vector-icons/Ionicons';
  import { urlFor } from '../sanity'
  
  const BasketFooter = () => {
    const navigation = useNavigation();

    const total = useSelector(totalprice)

    return (
      <View className=" bg-white p-4 ">
        <View className="flex-row justify-between my-2 ">
            <Text className="text-lg">Subtotal</Text>
            <Text className="text-lg">${total}</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-lg">Delivery Fee</Text>
            <Text className="text-lg">$ {total*0.1}</Text>
        </View>
        <View className="flex-row justify-between my-2">
            <Text className="font-bold text-lg">Order Total</Text>
            <Text className="font-bold text-lg">$ {(total)+(total*0.1)}</Text>
        </View>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("OrderPlacing")} className="bg-[#5da6b0] rounded-xl py-3 my-2">
                <Text className="text-center text-white">Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  export default BasketFooter