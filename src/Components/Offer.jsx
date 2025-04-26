import React from 'react'

const Offer = () => {
    const cards = [
      { id: 1, content: 'priyamvadha draping offer more than 5 prepleating compulmantory gits available',  text: "" },
      { id: 2, content: 'priyamvadha draping offer more than 5 prepleating compulmantory gits available',  text: "" },
      { id: 3, content: 'priyamvadha draping offer more than 5 prepleating compulmantory gits available',  text: "" }
    ];
  
    return (
      <div className="slider">
        <br></br>
        <Swiper
        //   modules={[ Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
        //   autoplay={{ delay:2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card">
                {/* <video src={card.content} alt={card.title}  /> */}
                {/* <h3>{card.title}</h3> */}
                <p>{card.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default Offer;