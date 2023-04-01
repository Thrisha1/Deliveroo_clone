import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trik',
  title: 'Trik',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Creator Name',
      validation: Rule => Rule.required(),
    }),
    
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of Creator',
    }),
   
  ],
})
