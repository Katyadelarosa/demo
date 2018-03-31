import PropTypes from 'prop-types';

export const USER_TYPE_DEF = {
  avatar: PropTypes.string,
  joined: PropTypes.instanceOf(Date),
  username: PropTypes.string,
};

export const POST_TYPE_DEF = {
  _id: PropTypes.string,
  votes: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.shape(USER_TYPE_DEF),
  createdAt: PropTypes.instanceOf(Date),
  description: PropTypes.string,
};
