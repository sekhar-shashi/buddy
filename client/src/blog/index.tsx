import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import BlogPost from './post';
import BlogList from './list';

const Blog = () => (
  <div>
    All articles list:
    <Switch>
      <Route exact path="/">
        <BlogPost />
      </Route>
    </Switch>
  </div>
);

export default Blog;
