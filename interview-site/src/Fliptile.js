import React, { useState } from 'react';
import './App.css';

const FlipTile = ({ imageSrc, imageAlt, text, onFirstClick }) => {
  const [flipped, setFlipped] = useState(false);

  const [clickedOnce, setClickedOnce] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    if (!clickedOnce) {
      setClickedOnce(true);
      onFirstClick();
    }
  };

  return (
    <div className={`tile ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="tile-inner">
        <div className="tile-front">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="tile-back">
          <p className="tile-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipTile;