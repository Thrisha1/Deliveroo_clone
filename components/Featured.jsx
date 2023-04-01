import {View, Text, Image, ScrollView} from 'react-native'
import React, { useState, useEffect} from "react";
import Categorycard2 from './Categorycard2.jsx'
import sanityClient from '../sanity'
import Ionicons from '@expo/vector-icons/Ionicons';


const Featured = (props) => {

    const [Restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "featured" &&  _id == $id ]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...,
            }
        }
        }[0]`,{ id: props.id }).then((data) => {
            setRestaurants(data?.restaurants)
            // console.log(Restaurants);
        });
    }, []);
    // console.log(Restaurants);


    return (
        <View className="pl-3 py-2">

            <View className="flex-row justify-between">
                <View>
                    <Text className="text-2xl font-bold">
                        {
                        props.title
                    }</Text>
                    <Text className="text-md font-normal text-gray-500">
                        {
                        props.desc
                    }</Text>
                </View>
                <View>
                    <Ionicons name="arrow-forward-outline" size={24}></Ionicons>
                </View>
            </View>
            <View>
                <ScrollView horizontal>
                    {Restaurants?.map((category) => (
                        <View className="bg-white my-2 mr-3 shadow-sm"
                        key ={category._id}
                        ><Categorycard2
                                id={category._id} 
                                short_desc={category.short_description}
                                dishes={category.dishes}
                                img={category.image}
                                title={category.name}
                                rating={category.rating}
                                address={category.address}
                                /></View>
                    ))}
                    
                </ScrollView>
            </View>

        </View>
    )
}

export default Featured
