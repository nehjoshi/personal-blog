export const ALL_POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, description}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0]`;
