import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <Slider {...settings}>
      <div className="relative w-full h-[400px] xl:h-[400px] flex justify-center items-bottom">
        <Image
          src="/assets/home/1.jpeg"
          fill
          style={{ objectFit: "cover" }}
          alt="Image 1"
        />
      </div>
      <div className="relative w-full h-[400px] xl:h-[400px] flex justify-center items-bottom">
        <Image
          src="/assets/home/2.jpeg"
          fill
          style={{ objectFit: "cover" }}
          alt="Image 2"
        />
      </div>
      <div className="relative w-full h-[400px] xl:h-[400px] flex justify-center items-bottom">
        <Image
          src="/assets/home/3.jpeg"
          fill
          style={{ objectFit: "cover" }}
          alt="Image 3"
        />
      </div>
      <div className="relative w-full h-[400px] xl:h-[400px] flex justify-center items-bottom">
        <Image
          src="/assets/home/4.jpeg"
          fill
          style={{ objectFit: "cover" }}
          alt="Image 4"
        />
      </div>
    </Slider>
  );
};

export default ImageSlider;
