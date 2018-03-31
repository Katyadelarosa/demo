import React from 'react';
import { storiesOf } from '@storybook/react';
import Fake from '../../seed/fake';
import PostListItem from './PostListItem';

const POST = Fake.post({ author: Fake.user() });

storiesOf('PostListItem', module)
  .add('default', () => (
    <PostListItem post={POST} />
  ));
