import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/CardSlider.css"; // Custom styles


const CardSlider = () => {
  const cards = [
    { id: 1, image: "https://rukminim2.flixcart.com/fk-p-flap/1010/170/image/aff65b3e709ce4eb.jpg?q=20", title: "Card 1", text: "Slide content here..." },
    { id: 2, image: "https://via.placeholder.com/300", title: "Card 2", text: "Slide content here..." },
    { id: 3, image: "https://via.placeholder.com/300", title: "Card 3", text: "Slide content here..." }
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card">
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};