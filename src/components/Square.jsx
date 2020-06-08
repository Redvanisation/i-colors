import React from 'react';

const Square = ({ hex }) => {
  return (
    <div className="square column is-3">
      <div className="color" style={{backgroundColor: `#${hex}`}} />
      <h2 className="color-name">#{hex}</h2>
    </div>
  );
}

export default Square;
