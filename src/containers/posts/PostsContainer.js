import _ from 'lodash';
import React from 'react';
import Fake from '../../seed/fake';
import PostsList from '../../components/posts/PostsList';

// FAKE
const POSTS = _.times(35, () => Fake.post({ author: Fake.user() }));

const PostsContainer = () => (
  <PostsList
    posts={_.reverse(_.sortBy(POSTS, ['votes']))}
  />
);

export default PostsContainer;
