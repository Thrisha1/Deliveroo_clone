import {defineField, defineType} from 'sanity'

export default {
  name: 'featured',
  title: 'Featured Menu Cateories',
  type: 'document',
  fields: [
    {
    name: 'name',
    type: 'string',
    title: 'Feature Category Name',
    validation: Rule => Rule.required(),
    },
    {
    name: 'short_description',
    type: 'string',
    title: 'Short_description',
    validation: Rule => Rule.min(2),
    },
    {
    name: 'restaurants',
    type: 'array',
    title: 'Restaurants',
    of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
   
   
  ],
}
