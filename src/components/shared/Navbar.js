import React from 'react';
import logo from '../../assets/logo.png';

const styles = {
  parent: {
    maxHeight: '5em',
    textAlign: 'center',
    background: '#000',
  },
  image: {
    height: '5em',
  },
};

const Navbar = () => (
  <div style={styles.parent}>
    <img src={logo} alt="logo" style={styles.image} />
  </div>
);

export default Navbar;
