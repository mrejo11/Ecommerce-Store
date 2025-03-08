"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface SamplePrevArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: SamplePrevArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-600 hover:scale-110 transition-all duration-300 absolute right-4 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="text-gray-600 bg-gray-400 rounded text-xl -translate-x-24  "><ChevronRight /></div>
    </div>
  );
}

function SamplePrevArrow(props: SamplePrevArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full cursor-pointer hover:bg-gray-600 hover:scale-110 transition-all duration-300 absolute left-4 z-10`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <div className="text-gray-600 bg-gray-400 rounded text-xl translate-x-24"><ChevronLeft /></div>
    </div>
  );
}


function ResponsiveSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  };

  return (
    
    <div className="w-full max-w-[1200px] mx-auto mt-2">
      <Slider {...settings}>
        <div className="relative w-full h-[300px]">
          <Image src="/big-sale-discounts-products_23-2150336669.avif" alt="slider" fill  />
        </div>
        <div className="relative w-full h-[300px]">
          <Image src="/black-friday-super-sale-web-banner-template_120329-2158.avif" alt="slider" fill />
        </div>
        <div className="relative w-full h-[300px]">
          <Image src="/gaming-laptop-sale-promotion-banner_252779-743.avif" alt="slider" fill />
        </div>
        <div className="relative w-full h-[300px]">
          <Image src="/smart-phone-sale-promotion-black-friday-sale-web-banner-template_179771-192.avif" alt="slider" fill />
        </div>
      </Slider>
    </div>
   
  )
}

export default ResponsiveSlider;