import React, { useState, useEffect } from 'react';
import { view } from 'model/blog-post';
import getArticles from './articles.service';
import View from './view';

const ListContainer = () => {
  const [list, setList] = useState<view[] | undefined>(undefined);

  useEffect(() => {
    setList(getArticles());
  }, []);

  return (
    <>
      {list ?.map((post) => (
        <View post={post} key={post.id} />
      ))}
    </>
  );
};

export default ListContainer;
