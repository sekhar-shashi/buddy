import { post } from 'model/blog-post';

const getArticle = (id: number): post => ({
  id,
  title: `abc ${id}`,
  body: 'abc text',
  description: `some description for ${id}`,
});

export default getArticle;
