import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant Names',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short_description',
      validation: Rule => Rule.max(100)
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address of Restaurant ',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: Rule => Rule.required(),
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from(1-5)',
      validation: Rule => Rule.required()
          .min(1)
          .max(5)
          .error("please enter a vakue between 1-5")
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
