// import {defineField, defineType} from 'sanity'

export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
    name: 'name',
    type: 'string',
    title: 'Name of dish',
    validation: Rule => Rule.required(),
    },
    {
    name: 'short_description',
    type: 'string',
    title: 'Short_description',
    validation: Rule => Rule.min(2),
    },
    {
    name: 'image',
    type: 'image',
    title: 'Image of restaurant',
    },
    {
    name: 'price',
    type: 'number',
    title: 'Price of dish',
    },
  ],
}
