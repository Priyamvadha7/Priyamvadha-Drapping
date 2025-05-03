import React from 'react'
import f from'../Assets/pink 1 chrome.webp'
import s from'../Assets/black saree chrome.webp'
import t from'../Assets/purple saree.webp'
import '../Css/Dcard.css'

function Dcard(){
    $('.carousel').carousel({
      padding: 200
  });
  autoplay();
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
  }
  return (
    <>
         <div class="carousel">
        <div class="carousel-item">
            <img src={f} alt="User Image" class="user-image"/>
        </div>
        <div class="carousel-item">
            <img src={s} alt="User Image" class="user-image"/>
        </div>
        <div class="carousel-item">
            <img src={t} alt="User Image" class="user-image"/>
        </div>
   
        </div>  
    </>
  )
}
export default Dcard;