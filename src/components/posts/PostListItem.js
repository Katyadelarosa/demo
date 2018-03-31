import React from 'react';
import PropTypes from 'prop-types';
import DateHelpers from '../../utils/date';
import { POST_TYPE_DEF } from '../../constants/PropTypeDefs';

const styles = {
  card: {
    margin: '0 2px 15px',
    border: '2px solid #fcfcfc',
    padding: '15px',
    boxShadow: '0 1px 2px rgba(34, 25, 25, 0.4)',
    background: '#fefefe',
    transition: 'opacity .4s ease-in-out',
  },
  image: {
    width: '100%',
  },
  postContent: {
    marginTop: '1em',
  },
  avatar: {
    width: '25px',
    height: '25px',
    borderRadius: '25px',
  },
  avatarWrapper: {
    display: 'flex',
  },
  username: {
    marginTop: '.2em',
    marginLeft: '1em',
  },
  date: {
    marginLeft: '2.6em',
  },
  description: {
    display: 'flex',
    marginTop: '1em',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '.5em',
  },
};

const PostListItem = ({ post }) => (
  <div style={styles.card}>
    <div>
      <img
        src={post.image}
        alt={`${post.author.userName}-${post.image}`}
        style={styles.image}
      />
    </div>
    <div style={styles.postContent}>
      <div style={styles.avatarWrapper}>
        <img
          src={post.author.avatar}
          alt={`${post.author.userName}-${post.image}`}
          style={styles.avatar}
        />
        <span style={styles.username}>{post.author.username}</span>
      </div>
      <span style={styles.date}>{DateHelpers.formatDate(post.createdAt)}</span>
      <div style={styles.description}>
        <strong style={styles.title}>{post.title} - ({post.votes})</strong>
        {post.description}
      </div>
    </div>
  </div>
);

PostListItem.propTypes = {
  post: PropTypes.shape(POST_TYPE_DEF).isRequired,
};

export default PostListItem;
