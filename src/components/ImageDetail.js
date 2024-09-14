import React from 'react';
import { useParams } from 'react-router-dom';

const ImageDetail = ({ images }) => {
  const { id } = useParams();
  const image = images[parseInt(id)];

  return (
    <div className="blog-post-detail">
      {image ? (
        <>
          <h1>{image.alt}</h1>
          <img src={image.url} alt={image.alt} className="post-image" />
          <p>{image.caption}</p>
          
        </>
      ) : (
        <p>Image not found.</p>
      )}
    </div>
  );
};

export default ImageDetail;
