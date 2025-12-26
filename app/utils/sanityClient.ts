import { createClient } from 'next-sanity';

export const SanityClient = createClient({
  projectId: 'l8lwcf5a',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

export const clientConfig = SanityClient.config();
