/*--------------------------------------------------------------------------------------------------*
 *                                         Fliptile util                                            *
 *                                         Genna Olavarri                                           *
 *                                           2025-08-13                                             *
 *--------------------------------------------------------------------------------------------------*/

// React imports
import { useState } from 'react';

// Local imports
import './App.css';

/*--------------------------------------------------------------------------------------------------*/
// This is a reusable flip tile component that can be used to display images and text.
/*--------------------------------------------------------------------------------------------------*/

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
          <img src={imageSrc} alt={imageAlt} loading="lazy"/>
        </div>
        <div className="tile-back">
          <p className="tile-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipTile;