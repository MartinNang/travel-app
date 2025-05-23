import React from "react";
import { Carousel } from "react-bootstrap";
import carouselImages from "../../data/carouselImages.json"; // Import the JSON data

const PhotoCarousel = ({ city }) => {
  const images = carouselImages[city] || [];
  console.log(images);

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`./${image.src}`} // Assuming you have the images in the public folder or a suitable path
            alt={image.alt}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{image.caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoCarousel;
