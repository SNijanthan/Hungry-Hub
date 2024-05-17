import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import briyani from "../Images/Dishes/Biryani_2.png";
import burger from "../Images/Dishes/Burger.png";
import cakes from "../Images/Dishes/Cakes.png";
import dosa from "../Images/Dishes/Dosa.png";
import gulab from "../Images/Dishes/Gulab_Jamun.png";
import ice from "../Images/Dishes/Ice_Creams.png";
import kabab from "../Images/Dishes/Kebabs.png";
import noodles from "../Images/Dishes/Noodles.png";
import paratha from "../Images/Dishes/Paratha.png";
import pastry from "../Images/Dishes/Pastry.png";
import parotta from "../Images/Dishes/Parotta.png";
import pasta from "../Images/Dishes/Pasta.png";
import pizza from "../Images/Dishes//Pizza.png";
import pongal from "../Images/Dishes/Pongal.png";
import poori from "../Images/Dishes/Poori.png";
import veg from "../Images/Dishes/Pure_Veg.png";
import rolls from "../Images/Dishes/Rolls.png";
import shakes from "../Images/Dishes/Shakes.png";
import shawarma from "../Images/Dishes/Shawarma.png";
import south from "../Images/Dishes/South_Indian_4.png";

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 8,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 6,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 4,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 3,
    },
  };

  const images = [
    briyani,
    burger,
    south,
    cakes,
    dosa,
    gulab,
    ice,
    kabab,
    noodles,
    paratha,
    pastry,
    parotta,
    pasta,
    pizza,
    pongal,
    poori,
    veg,
    rolls,
    shakes,
    shawarma,
  ];
  return (
    <div>
      <Carousel responsive={responsive}>
        {images.map((image, i) => (
          <img key={i} src={image} className="w-40 mx-1" alt="dish" />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
