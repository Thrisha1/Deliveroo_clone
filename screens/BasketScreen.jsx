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
import { selctItems, remove, removeAll, addQty } from '../features/counterSlice';
import Ionicons from '@expo/vector-icons/Ionicons';
import { urlFor } from '../sanity'
import { removeBasket } from '../features/basketSlice'
import BasketFooter from "../components/BasketFooter";

const BasketScreen = () => {

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector((state) => state.counter.items)
  const dispatch = useDispatch()
  const [GroupItems, setGroupItems] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [])


  useMemo(() => {

    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {});

    setGroupItems(groupedItems)

  }, [items]);
  console.log(GroupItems);


  return (
    <>
    <SafeAreaView className="relative">
      <View>
        <ScrollView className="relative">
          <View className="pt-10 pb-5 ">
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              className="  rounded-xl flex-row items-center py-3 justify-between bg-[#5da6b0]">
              <View className="px-2">
                <Ionicons name="arrow-back-outline" size={32} color="#fff" />
              </View>
              <View className="flex-row items-center">
                <Text className="text-2xl text-white font-medium tracking-widest ">Basket</Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-2xl  font-medium tracking-widest "></Text>
              </View>
              <View className="flex-row items-center">
                <Text className="text-2xl  font-medium tracking-widest "></Text>
              </View>
            </TouchableOpacity>
          </View>
          {
            Object.entries(GroupItems).map(([key, item]) => (

              <View key={key}>
                <View className="relative"  >
                  <View className="p-3 flex-row bg-white relative w-full">
                    <View className="items-center justify-center">
                      <Image source={{ uri: urlFor(item[0].image).url() }} className="w-20 h-20 bg-gray-300 rounded-full" />
                    </View>
                    <View className="flex-row self-center justify-around w-[300]">
                      <View className="flex-row ">
                        <Text className="text-xl font-medium tracking-widest ">{item.length} x </Text>
                        <Text className="text-xl font-medium tracking-widest ">{item[0].name}</Text>
                      </View>
                      <View className="flex-col">
                        <View className="flex-row mb-3 justify-center">
                          <View className="self-center">
                            <Ionicons name="logo-usd" size={19} opacity={0.5} color="black"></Ionicons>
                          </View>
                          <Text className="text-lg font-medium text-green-6 ">{item[0].price}</Text>
                        </View>
                        <View className="flex-row">
                          <View className="w-24 flex-row justify-between items-center bg-[#EAEAEA] shadow-xl px-2 py-1 my-2 rounded">
                            <Ionicons name="add-outline" size={24} color="#379237" onPress={() => dispatch(addQty({ id: key }))}></Ionicons>
                            <Text className="text-xl font-medium tracking-widest text-[#379237] ">{item.length}</Text>
                            <Ionicons name="remove-outline" size={24} color="#379237" onPress={() => dispatch(remove({ id: key }))}></Ionicons>
                          </View>
                          <TouchableOpacity className="self-center ml-3" onPress={() => dispatch(removeAll({ id: key }))}>
                            {/* <Text className="self-end text-red-600 border border-red-500 rounded-full  px-3 text-lg" >Remove</Text> */}
                            <View>
                              <Ionicons name="ios-trash" size={32} opacity={0.5} color="red"></Ionicons>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="mt-1"></View>
              </View>
            ))
          }
        </ScrollView>
      </View>
      


    </SafeAreaView>
    <View className="absolute bottom-0 w-full">
      <BasketFooter />
    </View>
  </>
  )
}

export default BasketScreen