import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'avatarIcon',
      title: 'Avatar Icon Class (FontAwesome)',
      type: 'string',
      description: 'e.g. fa-solid fa-pen-nib',
      initialValue: 'fa-solid fa-pen-nib',
    }),
    defineField({
      name: 'avatarImage',
      title: 'Avatar Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
});
