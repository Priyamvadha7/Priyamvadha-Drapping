import React from 'react'
import'../Css/Drape.css'

export default function Footer() {
  return (
    <>
        <footer class="container-fluid"> <div id="foot-head">
<p>Priyamvadha Draping <span>@2024PRIYAMVADHADRAPING,ALL RIGHTS REQUIRED</span> </p>
 </div>
 
 <div id="sub">
    <div id="foot">
      <p>Introduction</p><br/><br/> 
      <ol id="foot-ol">
       <li>ironing</li>
       <li>prepleating</li>
       <li>folding</li>
       <li>draping</li>
      </ol>
   </div>
   <div >
    <p>subscribe</p><br/>
    <div id="em">
    <input type="email" placeholder="enter the email"/>
    {/* <input type='sumbit' value="send" ></input> */}
    </div>
</div>
 </div><br/><br/>

<div id="foot-para">
  <div>
  <dl>
    <dt>Ironing</dt>
    <dd>Set mode of iron</dd>
    <dd>Check Temparature</dd>
    <dd>Place ironing Board</dd>
    <dd>Place the cloth </dd>
    <dd>Iron the cloth smoothly</dd>
    <dd></dd>
  </dl></div>
  <div>
  <dl>
    <dt>Pre-pleating</dt>
    <dd>Take Measurement</dd>
    <dd>Fold Palu pleats</dd>
    <dd>Spread Chest pleats</dd>
    <dd>Take center pleats</dd>
  </dl></div>
  <div>
  <dl>
    <dt>Folding</dt>
    <dd>Fold Inner part</dd>
    <dd>correctly adjust the chest pleats</dd>
    <dd>Then fold the saree prefectly</dd>
  </dl></div>
  <div>
  <dl>
    <dt>Draping</dt>
    <dd>Make sure the fit of Shapewear and Blouse</dd>
    <dd>Insert the inner part of the saree</dd>
    <dd>after one round pin the chest pleats</dd>
    <dd>Take the side pleats perfectly</dd>
    <dd>Center of the belly insert the center pleats </dd>
    <dd>Adjust the saree</dd>
  </dl></div>
  
  <div>
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
    <i class="fa fa-instagram w3-hover-opacity"></i>
    <i class="fa fa-snapchat w3-hover-opacity"></i>
    <i class="fa fa-pinterest-p w3-hover-opacity"></i>
    <i class="fa fa-twitter w3-hover-opacity"></i>
    <i class="fa fa-linkedin w3-hover-opacity"></i>
  </div>
  </div>
  {/* <iframe width="560" height="315" src="https://mdbootstrap.com/api/snippets/embed/2885134/fullscreen" frameborder="0"></iframe> */}
</footer>
 </>
  )
}