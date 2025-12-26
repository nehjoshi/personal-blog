import { SanityDocument } from 'next-sanity';

import { SanityClient as client } from '../utils/sanityClient';
import { ALL_POSTS_QUERY } from './constants';

export const getAll = async () => {
  const options = { next: { revalidate: 30 } };
  return await client.fetch<SanityDocument[]>(ALL_POSTS_QUERY, {}, options);
};
