import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
    Alert
  
  } from "react-native";
import React from 'react'
import {useRoute,useNavigation} from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { totalprice } from '../features/counterSlice';
import Ionicons from '@expo/vector-icons/Ionicons';

const Basket = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const item = useSelector((state)=> state.counter.items)
    const total = useSelector(totalprice)

  if (item.length == 0) return null  

  return (
    <View  className="absolute bottom-5 w-5/6 mx-5 py-1 bg-[#5da6b0] rounded-lg">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} >
        <View className="flex-row p-3 rounded-lg justify-between items-center">
            <View className="flex-row items-center">
                
                <Text className="text-xl text-white mr-2" >{item.length} Items</Text>
                <Ionicons name="pin-outline" size={24} color="white"></Ionicons>
                <Ionicons name="logo-usd" size={19} color="white"></Ionicons>
                <Text className="text-xl text-center text-white">{total}</Text>
            </View>
            <View className="mx-3">
                <Ionicons name="cart-outline" size={24} color="white" ></Ionicons>
            </View>
         </View>   
      </TouchableOpacity>
    </View>
  )
}

export default Basket