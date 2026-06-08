import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'Dr. Mrinalini Atrey Portfolio Admin',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hha5ug6i',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
