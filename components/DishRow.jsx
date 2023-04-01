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
import {useRoute,useNavigation} from '@react-navigation/native'
import React, {useLayoutEffect, useState, useEffect} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import { urlFor } from '../sanity'
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../features/counterSlice';
import { selctItems } from '../features/counterSlice';
import { addwithId } from '../features/counterSlice';



const DishRow = ( {id,image,name,price,description}) => {

    const dispatch = useDispatch();
    // const item = useSelector((state)=> state.counter.items)
    const item = useSelector((item)=> addwithId(item, id))
    // console.log(id);

    // const [Add, setAdd] = useState(0);
    Add = item.length;

    const removeitem = () => {
        if(item.length > 0) {
            dispatch(remove({id}))
            Add--;
        }
    } 
    const addItem = () => {
        dispatch(add({id, image, name, price, description}))
        Add++;
        Add == 0 ? Alert.alert("You have added 1 item to your cart") : null
    }

  return (
    <View className="relative">
        <View className="p-3 flex-row bg-white relative">
            <View className="w-8/12">
                <Text className="text-xl font-black tracking-widest ">{name}</Text>
                <Text className="text-gray-500 pt-2">{description}</Text>
                <View className="flex-row items-center">
                    <Ionicons name="logo-usd" size={19} opacity={0.5} color="black"></Ionicons>
                    <Text className="text-lg font-medium text-green-6 ">{price}</Text>
                </View>
            </View>
            <View className="items-center justify-center">
                <Image source={{uri:urlFor(image).url()}} className="w-32 h-24 bg-gray-300 rounded" />
            </View>
        </View>
       
             {
                Add == 0 ? (
                    <View>
                        <View className="absolute right-8 bottom-1 w-20 mb-1">
                        <Button className="px-5" title="Add" color="#4AA96C" onPress={addItem} rounded />
                        </View>
                    
                    </View>
                ):null
                
             }      
             {
                Add > 0 ? (
                    <View className="absolute right-7 bottom-5 w-24 flex-row justify-between items-center bg-[#EAEAEA] shadow-xl px-2 py-1 my-2 rounded">
                        <Ionicons name="add-outline" size={24} color="#379237" onPress={addItem} ></Ionicons>
                        <Text className="text-xl font-black tracking-widest text-[#379237] ">{item.length}</Text>
                        <Ionicons name="remove-outline" size={24} color="#379237" onPress={removeitem}></Ionicons>
                    </View>
                ):null
                
             }      
        
             
                
      <Text className="bg-white mt-[2]  "></Text>
      
    </View>
  )
}

export default DishRow