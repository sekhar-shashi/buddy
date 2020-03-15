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
    Blog
    <Switch>
      <Route exact path="/:id">
        <BlogPost />
      </Route>
      <Route exact path="/">
        <BlogList />
      </Route>
    </Switch>
  </div>
);

export default Blog;
