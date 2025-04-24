import React from 'react'
import logo from '../Assets/logo.jpeg';
// import'../src/css/drape.css'
import menu from '../Assets/menu icon.png'
// import Login from './Login';\
import Login from './Login.jsx'
import 'bootstrap-icons/font/bootstrap-icons.css';

 function Header() {
  
  return (
   <>
    <div class="top">
      
    <div id="menu"><a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"><img src={menu}></img></a></div>
    <div id="head_logo"><img src={logo} width="60px" title="logo" /></div>
    <div class="head"> <h1>Priyamvadha Drapping</h1></div> 
    <div><ol class="right">
                <li><a href="./Main.jsx"  title="Home">Home</a></li>
                <li><a href="#book"  title="Booking">Booking</a></li>
                <li><a href="" title="about">About</a></li>
                <li><a href={<Login/>} title="login">Login</a></li>
    </ol>
    </div>
     </div>
     <div class="offcanvas offcanvas-start offcanvas-header" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">Priyamvadha Draping</h5>  
     <div class="offcanvas-body">
     <ul className="list-unstyled">
      <li><a className="dropdown-item" href="#"><i className="bi bi-house-door-fill me-2"></i>Home</a></li>
      <li><a className="dropdown-item" href="#book"><i className="bi bi-calendar-check me-2"></i>Booking</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-scissors me-2"></i>Prepleating Styles</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-rulers me-2"></i>Measurement Guide</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-images me-2"></i>Gallery</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-chat-left-quote me-2"></i>Testimonials</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-geo-alt me-2"></i>Service Areas</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-question-circle me-2"></i>FAQs</a></li>
      <li><a className="dropdown-item" href="#"><i className="bi bi-person-circle me-2"></i>Login / Register</a></li>
    </ul>

    <div className="mt-4 text-muted small">
      <p><strong>Need help?</strong></p>
      <p>Call or WhatsApp us for urgent bookings.<br />+91-XXXXXXXXXX</p>
    </div>
     </div>  </div>  
    <hr/><br/>
    
     </>
  )
  
}

export default Header;