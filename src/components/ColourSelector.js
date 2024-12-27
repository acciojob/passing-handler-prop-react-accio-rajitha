// ColourSelector.js
import React from "react";

const ColourSelector = ({ config, handleColorChange }) => {
  return (
    <button
      className={config.classname}
      data-testid={config.key} 
      onClick={() => handleColorChange(config.background)}
    >
      {config.label}
    </button>
  );
};

export default ColourSelector;
