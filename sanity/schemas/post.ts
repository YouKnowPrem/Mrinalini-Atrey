import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Published Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Reading Time (e.g. 5 min read)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Card Icon Class (FontAwesome)',
      type: 'string',
      description: 'e.g. fa-landmark, fa-users, fa-vihara',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color Class / Type',
      type: 'string',
      options: {
        list: [
          { title: 'Pink', value: 'pink' },
          { title: 'Lavender', value: 'lavender' },
        ],
      },
      initialValue: 'pink',
      validation: Rule => Rule.required(),
    }),
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
      validation: Rule => Rule.required(),
    } as any,
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    } as any,
  ],
});
