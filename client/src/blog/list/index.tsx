import React, { useState, useEffect } from 'react';
import { post } from 'model/blog-post';
import getArticles from './articles.service';
import View from './view';

const ListContainer = () => {
  const [list, setList] = useState<post[] | undefined>(undefined);

  useEffect(() => {
    const genRandomKey = async () => {
      setList(await getArticles())
    };
  
    genRandomKey();
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
