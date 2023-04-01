import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import React,{useState,useEffect} from 'react'
import Categorycard from './Categorycard.jsx'
import sanityClient from '../sanity'

const Categories = () => {

    const [Categories, setCategories] = useState([]);
    
    useEffect(() => {
        sanityClient.fetch(`*[_type == "category"]{
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    type->{
                        name
                    }
                }
            }
        }`).then((data) => {
            setCategories(data)
        });
    }, []);
    // console.log(Categories);

    return (
        <ScrollView horizontal>
            {Categories?.map((category) => (
                <Categorycard
                        key ={category._id}
                        id={category._id}
                        title={category.name}
                        img={category.image}
                        />
            ))}

        </ScrollView>
    )
}

export default Categories
