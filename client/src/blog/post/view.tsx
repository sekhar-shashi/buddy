import React from 'react';
import { post } from 'model/blog-post';

interface Props {
    article: post
}

const BlogView: React.FC<Props> = ({ article }: Props) => (
  <>
    <div>
      Name: {article.name}
    </div>
    Category: {article.category}
    <div>
      Author: {article.author}
    </div>
  </>
);

export default BlogView;
