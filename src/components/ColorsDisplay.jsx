import React, { useEffect } from 'react';
import Square from './Square';


const ColorsDisplay = ({ colors, generataColor }) => {


  useEffect(() => {
    generataColor();
  }, [])



  return (
    <div className="columns is-multiline squares-container">
      {colors.map((hex, i) => <Square key={i} hex={hex} />)}
    </div>
  )
}

export default ColorsDisplay;
