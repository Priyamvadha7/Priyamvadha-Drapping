import React from 'react'
import first from'../Assets/pink 1 chrome.webp'
import second from'../Assets/black saree chrome.webp'
import third from'../Assets/purple saree.webp'
import four from '../Assets/sandal saree.webp'

export default function LatestPost() {
  return (
    <>
    <br></br>
      <div id="latest" >
        <h2 >Latest post</h2></div>
    <div id="body-mid" class="container">
       <div >                      
       <img src={first} alt="img1"/>
       <h6>Gorgeous Pink Lehanga</h6><br/>
       <p></p>
       </div>

       <div >                      
          <img src={second} alt="img1"/>
          <h6>Elegant Black Saree</h6><br/>
          <p></p>
       </div>

       <div >                
             <img src={third} alt="img1"/>
             <h6>Folated Slik Saree</h6><br/>
             <p></p>
       </div>

       <div >                      
          <img src={four} alt="img1"/>
          <h6>Belted Saree</h6><br/>
          <p></p>
       </div>
       </div>
        </>
  )
}