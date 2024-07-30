import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings} className="image-slider">
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/home/1.jpeg"
          alt="Image 1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/home/2.jpeg"
          alt="Image 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/home/3.jpeg"
          alt="Image 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="relative w-full h-[300px] md:h-[500px]">
        <Image
          src="/assets/home/4.jpeg"
          alt="Image 4"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Slider>
  );
};

export default ImageSlider;
