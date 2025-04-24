import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../Css/Slider.css"; // Custom styles
import frst from '../Assets/small1.mp4';
// import sec from '../Assets/iron slide 2.mp4';
import thr from '../Assets/small2.mp4';

const CardSlider = () => {
  const cards = [
    { id: 1, video: frst,  text: "" },
    // { id: 2, video: sec,  text: "" },
    { id: 3, video: thr,  text: "" }
  ];

  return (
    <div className="slider">
      <br></br>
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay:2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card">
              <video src={card.video} alt={card.title} autoPlay muted preload='auto'loop />
              {/* <h3>{card.title}</h3> */}
              {/* <p>{card.text}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;