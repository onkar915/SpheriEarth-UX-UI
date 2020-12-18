import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'


import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ModalView from './ModalView';




// ES7 snippets to do 'rfce'

function Home() {

    const history = useHistory();
 const product = event  => {

    event.preventDefault();//this stop the refresh
//looged in redirect to homepage
history.push('/Product');
 }

 const videos = event  => {

    event.preventDefault();//this stop the refresh

history.push('/Videos');
 }


 

 


    return (


        
        <div className='home'>
            <Banner />

           




            <div className="home_media">
           
                <img src="https://i.ibb.co/zPNycXn/Homepage-sec2.jpg" alt="Homepage-sec2" border="0"/>
<div className="home_para">
<h1 className="side">Single Platform Multiple Games</h1>
               <p className="side">Play multiple casual environmental games in 
                    our all-inclusive app and take conscious 
                    decisions in the real world.</p>
                      <Button  className="btn1"onClick={product}>GET THE SPHERIEARTH APP</Button>
                    </div>
     
            </div>
                     <div className="home_media">
           
               <img src="https://i.ibb.co/s2bWjpx/Screenshot-2020-12-14-125821.jpg" alt="Screenshot-2020-12-14-125821" border="0"/>
<div className="home_para">
<h1>Learn more with
our videos.</h1>
               <p>Bite sized information on hows and nows of the environment in bite sized videos.</p>
                      <Button onClick={videos}>WATCH VIDEOS</Button>
                    </div>
     
            </div>
            <div className="home_logo">
            <h1>Our Supporters</h1>
            <img src="https://i.ibb.co/qBG7T9L/SRHlogo-Sec4.png" alt="SRHlogo-Sec4" border="0" height="20px"/>
            <img src="https://i.ibb.co/3Wf1Vzt/Stadt-Heidelberg-Logo-Sec4.png" alt="Stadt-Heidelberg-Logo-Sec4" border="0"/>
            <img className="uni" src=" https://sanantonio.kidsoutandabout.com/sites/default/files/uiw-logo.png" alt="UIWlogo-Homepage-Sec4" border="0"/> 
            </div> 
     
     
            
     
            <div className='home__section'>
            <Card
                src="https://i.ibb.co/0XsNSCQ/Blog1.jpg"
                title="Gamification in Education : How does it work?"
                description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui "
                price=""
            />
            <Card
                src="https://i.ibb.co/M8z6mx6/Blog2.jpg"
                title="Is the world moving to HyperCasual games?"
                description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
                price=""
            />
            <Card
                src="
https://i.ibb.co/0XsNSCQ/Blog1.jpg"
                title="Player Retention 101 :
Features to retain the player."
                description="Excepteur sint occaecat cupidatat "
                price=""
            />
              <Card
                src="
https://i.ibb.co/M8z6mx6/Blog2.jpg"
                title="Player Retention 101"
                description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui"
                price=""
            />
            </div>

            <div className="home_subscribe">
            <h1>Like what you see?</h1>
            <p>Stay informed with insights into our latest games and interesting must-reads!</p>
            <input type="text" name="name" placeholder="Enter your Email..." /> <ModalView/>
          
            </div>
           
        </div>
    )
}

export default Home
