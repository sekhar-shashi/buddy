import React from 'react';
import { view } from 'model/blog-post';
import { Link } from 'react-router-dom';

interface Props {
    post: view;
}

const View = ({ post }: Props) => (
  <>
    <Link to={`/${post.id}`}>
      {post.title}
    </Link>
    <div>
      {post.description}
    </div>
  </>
);

export default View;
