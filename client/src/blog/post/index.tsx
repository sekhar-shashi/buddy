import React, { useCallback } from 'react';
import { Route } from 'react-router-dom';
import { post } from 'model/blog-post';
import BlogView from './view';
import getArticle from './article.service';

const BlogContainer: React.FC = () => {
  const getArticleByRoute = useCallback(
    (id: string) => {
      const articleId = Number.parseInt(id, 0);
      return getArticle(articleId);
    },
    [],
  );

  return (
    <Route
      path="/:id"
      render={({ match }) => {
        const article = getArticleByRoute(match?.params.id);

        return article
          ? <BlogView article={article as unknown as post} />
          : <div>Page not found</div>;
      }}
    />

  );
};

export default BlogContainer;
