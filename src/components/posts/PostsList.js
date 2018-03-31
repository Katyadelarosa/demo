import React from 'react';
import PropTypes from 'prop-types';
import StackGrid from 'react-stack-grid';
import PostListItem from './PostListItem';
import { POST_TYPE_DEF } from '../../constants/PropTypeDefs';

const styles = {
  parent: {
    width: '100%',
    height: '100%',
    minHeight: '100vh',
  },
};


const PostsList = ({ posts }) => (
  <div style={styles.parent}>
    <StackGrid
      columnWidth={320}
      monitorImagesLoaded
    >
      {
        posts.map(post => (
          <PostListItem key={post._id} post={post} />
        ))
      }
    </StackGrid>
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(POST_TYPE_DEF)).isRequired,
};

export default PostsList;
