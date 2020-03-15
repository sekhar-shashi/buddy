import React from 'react';
import { post } from 'model/blog-post';

interface Props {
    article: post
}

const BlogView: React.FC<Props> = ({ article }: Props) => (
  <>
    <div>
      {article.title}
    </div>
    <img src={article.heroImage} alt={article.title} />
    <div>
      {article.body}
    </div>
  </>
);

export default BlogView;
