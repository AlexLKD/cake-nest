import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Navbar = ({username}) => {
  return (
    <nav className="navbar">
      <LeftSide />
      <RightSide username={username} />
    </nav>
  );
};

export default Navbar;