import { view } from 'model/blog-post';

const getArticles = () => {
  const list:view[] = [];
  for (let i = 1; i < 10; i += 1) {
    list.push({
      id: i,
      title: `title for ${i}`,
      description: `some description for ${i}`,
    });
  }
  return list;
};

export default getArticles;
