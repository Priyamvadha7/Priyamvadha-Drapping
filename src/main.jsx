import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Css/Drape.css'
import Header from './Components/Header.jsx'
import Maincontent from './Components/Maincontent.jsx'
import Booking from './Components/Booking.jsx'
import Footer from './Components/Footer.jsx'
import Boxfold from './Components/Boxfold.jsx'
import LatestPost from './Components/LatestPost.jsx'
import Login from './Components/Login.jsx'
import BookingSaree from './Components/BookingSaree.jsx'
import BookingPleat from './Components/Booking.jsx'
import About from './Components/About.jsx'
import Slider from './Components/Slider.jsx'
import Dcard from './Components/Dcard.jsx'
// import Offer from './Components/Offer.jsx'
// import Grid from './Components/Grid.jsx'
// import FooterEnd from './Components/FooterEnd.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    {/* <Offer /> */}
    <Maincontent/>
    <Boxfold/> 
    {/* <Grid/> */}
    <Slider/> 
    {/* <Dcard/> */}
     <LatestPost/> 
    {/* <Booking/> */}
    {/* <BookingSaree/> */}
    {/* <BookingPleat/> */}
    {/* <Login/> */}
    {/* <About/> */}
     <Footer/>
     {/* <FooterEnd /> */}
  
  </StrictMode>,
  
)
