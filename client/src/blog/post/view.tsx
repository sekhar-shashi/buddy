import React from 'react';
import { post } from 'model/blog-post';

interface Props {
    article: post
}

// const BlogView: React.FC<Props> = ({ article }: Props) => (
//   <>
//     <div>
//       Name: {article.name}
//     </div>
//     Category: {article.category}
//     <div>
//       Author: {article.author}
//     </div>
//   </>
// );

const BlogView = (data: post[]) => (
  <div>
    {data.map(item => (
      <div className="station" key={item.name}>{item.name}</div>
    ))}
  </div>
); 



export default BlogView;
