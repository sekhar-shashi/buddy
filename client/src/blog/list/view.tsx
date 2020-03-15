import React from 'react';
import { post } from 'model/blog-post';
import { Link } from 'react-router-dom';

interface Props {
    post:post;
}

const View = ({ post }: Props) => (
  <>
    <div>
      Name: {post.name}
    </div>
    Category: {post.category}
    <div>
      Author: {post.author}
    </div>
  </>
);

export default View;
