import { post } from 'model/blog-post';

const getArticle = async(id: string) => {
  return await fetch("http://localhost:/api/articles/get")
        .then(res => res)
        .catch(err => err);
};

export default getArticle;
