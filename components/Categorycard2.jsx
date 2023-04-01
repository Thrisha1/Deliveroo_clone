import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const Categorycard2 = ({img,title,id,rating,short_desc,address,dishes}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity className="" onPress={ () => {
            navigation.navigate("Restaurant",{
                img,
                title,
                id,
                rating,
                short_desc,
                address,
                dishes
            })
            // console.log(dishes[0]);
        }}>
            <ScrollView className="flex-row">
                <View className="p-2 relative">
                    <Image source={
                        {uri : urlFor(img).url()}
                    }
                        
                        className="w-52 h-32"/>

                    <Text className="text-lg font-bold">
                        
                        {title}
                    </Text>

                    <View className="flex-row">
                    <View>
                        <Ionicons name="arrow-forward-outline" size={24}></Ionicons>
                    </View>
                        <Text className="text-md text-center px-2">
                            {rating}</Text>
                        <Text className="text-md text-center">
                            Japaneese</Text>
                    </View>
                </View>
            </ScrollView>
        </TouchableOpacity>
    )
}

export default Categorycard2
