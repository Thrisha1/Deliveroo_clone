// import {defineField, defineType} from 'sanity'

export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
    name: 'name',
    type: 'string',
    title: 'Restaurant Name',
    validation: Rule => Rule.required(),
    },
    {
    name: 'short_description',
    type: 'string',
    title: 'Short_description',
    validation: Rule => Rule.max(100),
    },
    {
    name: 'image',
    type: 'image',
    title: 'Image of restaurant',
    },
    {
    name: 'address',
    type: 'string',
    title: 'Address of Restaurant ',
    validation: Rule => Rule.required(),
    },
    {
    name: 'rating',
    type: 'number',
    title: 'Enter a rating from(1-5)',
    validation: Rule => Rule.required()
        .min(1)
        .max(5)
        .error("please enter a vakue between 1-5")
    },
    {
    name: 'type',
    type: 'reference',
    title: 'Category',
    validation: Rule => Rule.required(),
    to: [{type: 'category'}],
    },
    {
    name: 'dishes',
    type: 'array',
    title: 'Dishes',
    of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
],
    
}