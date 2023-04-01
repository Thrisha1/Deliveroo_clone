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
import {useNavigation} from "@react-navigation/native";
import Categories from '../components/Categories.jsx';
import Featured from '../components/Featured.jsx';
import sanityClient from '../sanity'
import React, {useLayoutEffect, useState, useEffect} from "react";
import Ionicons from '@expo/vector-icons/Ionicons';


function HomeScreen() {
    const navigation = useNavigation();
    const [Featuredcat, setFeaturedcat] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [])

    useEffect(() => {
        sanityClient.fetch(`*[_type == "featured"]{
            ...,
            restuarants[]->{
                ...,
                dishes[]->{
            }
        }
        }`).then((data) => setFeaturedcat(data));
    }, []);
    // console.log(Featuredcat[0].restaurants);


    return (

        <SafeAreaView className="">
            <ScrollView className="bg-white">
                <View className="pt-12 flex-row mt-4 px-4 pb-3 justify-between bg-white">
                    <View className="flex-row"><Image source={
                                {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEVRDk-Km-uX1z-5-NBVKYj-fGh7QR935Pb9YmpolA2g&s"}
                            }
                            className="w-8 h-8 rounded-full mx-2"/>
                        <View>
                            <Text className="text-gray-500">Deliver now!</Text>
                            <View className="flex-row">
                                <Text className="text-xl font-bold">Current Location</Text>
                                <View className="ml-2 ">
                                    <Ionicons name="chevron-down" size={24} color="black"  />
                                </View>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Dummy")}>
                        <Ionicons name="person-outline" size={24} color="black"  /> 
                    </TouchableOpacity> 
                </View>

                <View className="flex-row">
                    <View className="flex-row space-x-2 m-2 px-2 p-3 bg-gray-200 w-[350px]">
                        <Ionicons name="search-outline" size={24} color="black"  />  

                        <TextInput placeholder="search" />

                    </View>
                    <View className="my-5 ">
                         <Ionicons name="grid-outline" size={24}></Ionicons>
                    </View>
                </View>
                <ScrollView className="bg-gray-100">
                    <Categories/>
                    {Featuredcat.map((category)=> (

                        <Featured 
                            key={category._id} 
                            id={category._id} 
                            title={category.name} 
                            desc={category.short_description}
                        />

                    ) )}
                </ScrollView>

            </ScrollView>

        </SafeAreaView>
    );
}
export default HomeScreen;
