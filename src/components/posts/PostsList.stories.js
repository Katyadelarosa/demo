import _ from 'lodash';
import React from 'react';
import { storiesOf } from '@storybook/react';
import Fake from '../../seed/fake';
import PostsList from './PostsList';

const POSTS = _.times(35, () => Fake.post({ author: Fake.user() }));

const STYLE = {
  width: '100%',
  height: '100%',
  minHeight: '100vh',
};

storiesOf('PostsList', module)
  .add('default', () => (
    <div style={STYLE}>
      <PostsList posts={POSTS} />
    </div>
  ));
