import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  name: 'default',
  title: 'Notariusz AI Portal',
  projectId: 'eh3hsv19',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: 'recommendation',
        title: 'Polecenia',
        type: 'document',
        fields: [
          { name: 'title', title: 'Tytuł', type: 'string' },
          { name: 'description', title: 'Opis', type: 'text' },
          { name: 'url', title: 'Link', type: 'url' },
          { 
            name: 'category', 
            title: 'Kategoria', 
            type: 'string',
            options: { list: ['Link', 'Wideo', 'Podcast'] }
          }
        ]
      }
    ],
  },
})
