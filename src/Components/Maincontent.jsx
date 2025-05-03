import React from 'react'
import logov from '../Assets/logo video.mp4';
import 'bootstrap/dist/css/bootstrap.css';
 function Maincontent() {
 
  return (
    <>
   <marquee>Priyamvadha Draping ! Priyamvadha Draping ! Priyamvadha Draping ! Priyamvadha Draping !</marquee>
   <br></br><br></br>
<div class="row container-fluid">
  <div class="col-5 "> 
    <div id="logo">
    <video src={logov} alt="logo" title="logo" autoPlay muted preload='auto'loop width={"50px"} height={"50px"}/>
    </div>
    </div>
  <div class="col-7" id="side">  
      <div>     
    <center>
    
    <p id="font">Draping a saree<br></br>gracefully is nothing -<br></br>but art</p></center>
   <br></br> 

   <b> "Saree:A symbol of tradition that speaks Louder than words."</b></div>
    </div> </div>
<br/>
    
    </>   
  )
}
export default Maincontent;