import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import Layout from './Layout';
import PostsPage from './views/posts/Posts';

const PostRedirect = () => <Redirect to="posts" />;

export default () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={PostRedirect} />
        <Route
          path="/posts"
          component={PostsPage}
        />
      </Switch>
    </Layout>
  </BrowserRouter>
);
