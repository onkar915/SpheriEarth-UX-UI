


import React from 'react'

import './Videos.css'


function Videos() {

 
    return (
        <div>
            <div className="blog">
            <h1>Videos</h1>
            <p>Get more insights into the current environmental crisis with Bob, the worthy janitor.</p>
            <img src="https://i.ibb.co/K7H9khR/Screenshot-2020-12-14-at-12-27-51-AM.png" />
            </div>
               <div className="home_player">
<iframe width="1000" height="400" src="https://www.youtube.com/embed/4hLQeCg_NhI" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen ="allowfullscreen"></iframe>
 </div>
<div className="section_one">

    <h1>Climate Change effects on the environment | SpheriEarth</h1>
</div>
<div className="section_two">
<p>The effects of global warming on the environment can be very disturbing. Global warming stresses our ecosystems, through higer ocean temperatures, water shortages, higher temperatures which leads to increased fire threats, famine just to mention a few. Its time to educate ourselves on Climate Change.</p>
</div>

   <div className="blog_card">
<div className="video_section">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/5rsbTJ8tI3Y?start=6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen">
        
      </iframe>
     <h1>Climate Change effects on the environment </h1>

    
</div>



   
   <div className="video_section">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/onM0I4Wpkks?start=6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen"></iframe>

<h1>Plastic straws are harmful for the environment </h1>
</div>

           <div className="video_section">    
<iframe width="560" height="315" src="https://www.youtube.com/embed/rNYqZ62dx1U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen="allowfullscreen"></iframe>
   <h1>Plastic bottles or Boxed water? </h1> 
  </div>        
        
      
         
           
            </div>
        </div>
    )
}

export default Videos
