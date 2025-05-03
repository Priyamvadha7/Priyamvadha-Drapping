import React from 'react'
import '../Css/Drape.css'
import bluesaree from '../Assets/blue boxfolding.jpeg'
import sandal from'../Assets/sandal saree boxfolding.jpeg'
import violet from'../Assets/violet boxfolding.jpeg'
import red from '../Assets/red saree drape.jpeg'
import yellow from '../Assets/yellow saree drape.jpeg'
import green from '../Assets/green saree drape.jpeg'
import gre from '../Assets/green saree.jpeg'

 function Boxfold() {
  return (
    <>
    <div class="bb container-fluid" >
         <div class="card" style={{ width: '19rem' }} id="bubble">                    
            <img src={bluesaree} alt="img1" id="mg" />
            <small  class="card-text">BOXFOLDED SAREE</small>
            <p  class="card-text">Beautiful blue boxfolded saree!<br/>Boxfolded saree is easy to drape..</p>
         </div>
         <div class="card" style={{ width: '19rem' }}  id="bubble">                     
            <img src={sandal} alt="img2"class="card-img-top"  id="mg"/>
            <small  class="card-text" >BOXFOLDED SAREE</small>
            <p   class="card-text">Beautiful sandal boxfolded saree!<br/>When to drape is look elegant..</p>
         </div>
         <div class="card" style={{ width: '19rem' }} id="bubble">                  
            <img src={violet} alt="img3"class="card-img-top" id="mg" />
            <small class="card-text" >BOXFOLDED SAREE</small>
            <p class="card-text">Beautiful violet boxfolded saree!<br/>For Time management is Better..</p>
         </div>
         <div class="card" style={{ width: '19rem' }} id="bubble">                  
            <img src={gre} alt="img3"class="card-img-top" id="mg"/>
            <small class="card-text" >BOXFOLDED SAREE</small>
            <p class="card-text">Beautiful Green boxfolded saree!<br/>to Look elegant</p>
         </div>
         <div class="card " style={{ width: '19rem' }}  id="bubble">                    
            <img src={red} alt="img4" class="card-img-top" id="mg" />
            <small  class="card-text">SAREE DRAPING</small>
            <p  class="card-text">Muhurtham Red Saree Drape </p>
         </div>
         <div class="card" style={{ width: '19rem' }}  id="bubble">                   
            <img src={yellow} alt="img5" class="card-img-top" id="mg"/>
            <small  class="card-text" >SAREE DRAPING</small>
            <p  class="card-text">Reception Yellow Saree Drape</p>
         </div>
         <div class="card" style={{ width: '19rem' }}  id="bubble">                      
            <img src={green} alt="img6" class="card-img-top"  id="mg"/>
            <small  class="card-text" >SAREE DRAPING</small>
            <p  class="card-text">Enagement Green Saree Drape</p>
         </div>
         <div class="card " style={{ width: '19rem' }} id="bubble">                    
            <img src={red} alt="img4" class="card-img-top" id="mg"/>
            <small  class="card-text">SAREE DRAPING</small>
            <p  class="card-text">Muhurtham Red Saree Drape </p>
         </div>
        </div><br></br>
        <div id="button">
      <input type="button" value="Place the Service Required" class="demo"data-toggle="collapse" data-target="#drop" id="book"/>
    </div>
    <div id="drop" class="collapse">
      <a href=''>pre-pleating</a>
      <a href=''>Draping</a>
    </div>
    </>
  )
}
export default Boxfold;