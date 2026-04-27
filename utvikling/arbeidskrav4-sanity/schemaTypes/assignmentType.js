import {defineType, defineField} from 'sanity'

export const assignmentType = defineType({
  name: 'assignment',
  title: 'Arbeidskrav',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beskrivelse',
      type: 'text',
    }),
  ],
})