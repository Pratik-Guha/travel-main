import React from "react";
import Slider from "react-slick";
import beaches from "../assets/beaches.jpg";
import flights from "../assets/flights.jpg";
import discounts from "../assets/discount.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/cardsection.css"; // Keep your existing CSS

const CardSection = () => {
  const cards = [
    {
      imgSrc: "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg",
      title: "Here is the Best Beaches to visit",
    },
    {
      imgSrc: "https://cdn.pixabay.com/photo/2017/08/07/19/35/people-2607041_1280.jpg",
      title: "Book Your Flights",
    },
    {
      imgSrc: "https://cdn.pixabay.com/photo/2017/10/23/05/56/summer-2880261_1280.jpg",
      title: "Discounts over 20%",
    },
  ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: true,
  };

  return (
    <div>

    <div className="slider-container overflow-hidden">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center outline-none border-none">
            <img src={card.imgSrc} alt={card.title} className="w-full h-[400px] object-cover" />
            <h3 className="text-2xl font-semibold">{card.title}</h3>
          </div>
        ))}
      </Slider>  
    </div>
    <div className="flex justify-center items-center w-full gap-4 mt-4">
      <button className="bg-blue-500 border-2  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
        Explore
      </button>
    </div>
    </div>
  );
};

export default CardSection;
