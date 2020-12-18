import React from 'react';
import './Footer.css'

import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

import FacebookIcon from '@material-ui/icons/Facebook';

import { Link } from 'react-router-dom';

function Footer() {
    return (


        <div>
      <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2 >SpheriEarth GbR</h2>
         <Link to="/About" className="header_link">
       <h4 >About US</h4>
       </Link>
      <Link to="/Product" className="header_link">
       <h4>Product</h4>
       </Link>
        <Link to="/Videos" className="header_link">
    <h4>Videos</h4>
       </Link>
      
         <Link to="/Blog" className="header_link">
           <h4>Blog</h4>
       </Link>
        
          </div>
          {/* Column2 */}
          <div className="col">
            <h3>Where we work</h3>
      <dl>
  <dt>Gründer Institut,</dt>
<dt>Kurfürsten-Anlage 52</dt>
<dt>69115 Heidelberg, Germany</dt>

  
  
</dl>
          </div>
          {/* Column3 */}
          <div className="col">
            <h2>Find us on</h2>
           <div className="banner_icon"  > 
   <a href="https://www.instagram.com/spheriearth/">
    <InstagramIcon/>
   </a>
   <a href="https://www.facebook.com/Spheriearth/">
     <FacebookIcon />
    </a>
   <a href="https://www.youtube.com/channel/UCyV1cy9ycsMnp4Krdx2GVZw"> 
   < YouTubeIcon/></a> 
     </div>  
    
    

          
          </div>
        </div>
      
      </div>
      
    </div>
      <hr />
        <div className="row_sectiontwo">
          <p >
            &copy;{new Date().getFullYear()}  SpheriEarth GbR.  All Rights Reserved.
        
          </p>
            <p>Made with  <FavoriteOutlinedIcon style={{ color: 'red' }} /> Heidelberg</p>
         
        </div>
    </div>
    )
}

export default Footer
