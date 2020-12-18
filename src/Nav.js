import React, { useEffect, useState } from 'react'
import './Nav.css'
import { Button } from "@material-ui/core";
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"

function Nav() {



    // const [show, handleshow] = useState(false)

//scroll listener
//100px the scroll comes
//useEffect(() => {
    //window.addEventListener("scroll", () => {
      //if (window.scrollY > 100) {
        //handleshow(true)
      //} else handleshow(false);
    //});
    //return () => {
      //window.removeEventListener("scroll")
    //}
  //}, []);

// <div className={`nav ${show && "nav_black"}`}></div>


const history = useHistory();
 const Contact = event  => {

    event.preventDefault();//this stop the refresh
//looged in redirect to homepage
history.push('/Contact');
}



    return (
       
             <div className="nav">
                 <Link to="/" className="nav_img">
                 <img src="https://i.ibb.co/xsn9TVK/Screenshot-2020-12-15-181304.jpg" 
                 height="60px"alt="spheriEarth"/>
               
</Link>     
       <Link to="/About" className="header_link">
       <h2 >About US</h2>
       </Link>
      <Link to="/Product" className="header_link">
       <h2 >Product</h2>
       </Link>
        <Link to="/Videos" className="header_link">
    <h2>Videos</h2>
       </Link>
      
         <Link to="/Blog" className="header_link">
           <h2>Blog</h2>
       </Link>
    
       

        <div className="nav_button">
        <Button onClick={Contact}>Contact</Button>
          
        </div>
   
        </div>
        
    )
}

export default Nav
