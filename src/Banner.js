import React from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import {useHistory} from "react-router-dom"




function Banner() {

 const history = useHistory();
 const explore = event  => {

    event.preventDefault();//this stop the refresh
//looged in redirect to homepage
history.push('/About');
}
    return (
        <div className='banner'>
         <div className="banner_logo">
           <div ><iframe src="https://streamable.com/e/is13rc?autoplay=1&nocontrols=1" frameborder="0" width="100%" height="100%" allowfullscreen allow="autoplay" ></iframe>
         
           </div>
         </div>
            <div className='banner__info'>
                <h1>Gamifying the world we want</h1>
                <h5>
                    Edutainment to bring out the green life in you.
                    
                </h5>
                <Button onClick={explore}>EXPLORE</Button>
                
                <div className="banner_bgm">
                <img src="https://i.ibb.co/x58qtRD/logonow.jpg" alt="Screenshot-2020-12-15-091148" border="0"/>
</div>






                
            </div>
            
        </div>
    )
}

export default Banner
