// ImageCard.js
import React from 'react';

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.url} alt={image.alt} />
      <p>{image.caption}</p>
    </div>
  );
};

export default ImageCard;
