import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'srmego44',
  dataset: 'production',
  apiVersion: '2025-04-26',
  useCdn: false,
  perspective: 'published',
})