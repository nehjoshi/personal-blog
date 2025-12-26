import { SanityDocument } from 'next-sanity';

import { SanityClient as client } from '../utils/sanityClient';
import { POST_BY_SLUG_QUERY } from './constants';

export const getOne = async (slug: string) => {
  const options = { next: { revalidate: 30 } };
  return await client.fetch<SanityDocument>(
    POST_BY_SLUG_QUERY,
    { slug },
    options,
  );
};
