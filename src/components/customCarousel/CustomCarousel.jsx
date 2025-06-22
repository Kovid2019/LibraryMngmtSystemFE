import Carousel from "react-bootstrap/Carousel";
import Library1 from "@assets/img/Library1.jpg";
import Library2 from "@assets/img/Library2.jpg";
import Library3 from "@assets/img/Library3.jpg";
export const CustomCarousel = () => {
  return (
    <Carousel className="mt-4">
      <Carousel.Item>
        <img src={Library1} alt="First Slide" className="d-block w-100" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Explore our extensive collection</h3>
          <hr />
          <p>
            Welcome to our Online Library, where you can find large collection
            of books under different sections based on your preferences
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Library2} alt="Second Slide" className="d-block w-100 " />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Explore our extensive collection</h3>
          <hr />
          <p>
            Welcome to our Online Library, where you can find large collection
            of books under different sections based on your preferences
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Library3} alt="Third Slide" className="d-block w-100" />
        <Carousel.Caption className="carousel-caption-bg rounded p-2">
          <h3>Explore our extensive collection</h3>
          <hr />
          <p>
            Welcome to our Online Library, where you can find large collection
            of books under different sections based on your preferences
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
