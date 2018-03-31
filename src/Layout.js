/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Navbar from './components/shared/Navbar';

const styles = {
  container: {
    minHeight: '100vh',
    background: 'url(//subtlepatterns.com/patterns/scribble_light.png)',
    fontFamily: 'Calluna, Arial, sans-serif',
  },
  children: {
    marginTop: '2em',
  },
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <Navbar />
    <div style={styles.children}>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default withRouter(Layout);
