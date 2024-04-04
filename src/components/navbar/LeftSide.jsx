import React from 'react';
import Logo from "../reusable-ui/Logo";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div>
        <h1>Cake</h1>
      <img src={Logo} alt="Cupcake" />
        <h2>Nest</h2>
      </div>
    </div>
  );
};

export default LeftSide;