import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,

} from "react-native";
import React, {useLayoutEffect, useState, useEffect} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import sanityClient from '../sanity'
import { urlFor } from '../sanity'



const DummyScreen = () => {

const [Featuredcat, setFeaturedcat] = useState([])

  useEffect(() => {
    sanityClient.fetch(`*[_type == "trik"]{
        ...,
      
    }`).then((data) => setFeaturedcat(data));
}, []);

  return (
    <>
      {
      Featuredcat.map((item) => (
        
        <View key={item.name} className="flex-1 justify-center items-center w-full">
            
          <Image source={{uri:urlFor(item.image).url()}} className="w-72 h-72 rounded-lg " />
          <Text className="text-xl text-bold text-center">{item.name}</Text>
        </View>
      ))
    }
    </>
  )
}

export default DummyScreen