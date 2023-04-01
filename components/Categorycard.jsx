import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const Categorycard = (props) => {
    return (

        <TouchableOpacity className="relative">
            <ScrollView className="relative">
                <Image source={
                        {uri: urlFor( props.img).width(200).url()}
                    }
                    className="w-32 h-24 ml-3 my-3"/>

                <Text className="absolute bottom-3 left-4 text-lg text-white">
                    {
                    props.title
                }</Text>
            </ScrollView>
        </TouchableOpacity>
    )
}

export default Categorycard
