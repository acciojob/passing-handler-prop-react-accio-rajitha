// Selection.js
import React, { useState, useEffect } from 'react';

const Selection = ({ selectedColor }) => {
  const [background, setBackground] = useState(null);

  useEffect(() => {
    setBackground(selectedColor);
  }, [selectedColor]);

  return (
    <div 
      className="fix-box" 
      style={{ 
        background, 
        width: '200px', 
        height: '200px', 
        display: 'inline-block', 
        border: '1px solid white',
        color:'white',
        textAlign:'center'
      }} 
    >
        <div style={{ paddingTop: '10px' }}> 
        Selection
      </div>
    </div>
  );
};


export default Selection;

