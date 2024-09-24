import React from 'react';
import Gallery from './Gallery';
import { Carousel } from 'react-bootstrap';
import image1 from '../assets/images/caro1.jpg';
import image2 from '../assets/images/caro2.jpg';
import image3 from '../assets/images/caro3.jpg';
import { Link } from 'react-router-dom';

const Home = ({images}) => {
  return (
    <div>
      
      

      <br></br><br></br>
      <Carousel className="caro" fade interval={2000}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide"  />
          <Carousel.Caption className="caro-caption">
            <h3></h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption className="caro-caption">
            <h3></h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption className="caro-caption">
            <h3></h3>
            <p>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
        <div className="blog-preview">
        {images.map((image, index) => (
          <div className="blog-post" key={index}>
            <img src={image.url} alt={image.alt} className="post-thumbnail" />
            <div className="post-content">
              <h2>{image.alt}</h2>
              <p>{image.caption.substring(0, 150)}...</p> {/* Short description */}
              <Link to={`/image/${index}`}><button>See More</button></Link> {/* Link to the full blog post */}
            </div>
          </div>
        ))}
      
      </div>
    </div>
  );
};

export default Home;
