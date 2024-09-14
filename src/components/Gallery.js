// Gallery.js
import React from 'react';
import ImageCard from './ImageCard';

const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <ImageCard key={index} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
