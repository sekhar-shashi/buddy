import { post } from 'model/blog-post';

const getArticle = (id: string): post => ({
  id,
  author: `abc ${id} `,
  name: 'abc name',
  category: `some category for ${id}`,
});

export default getArticle;
