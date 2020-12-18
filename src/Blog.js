import React from 'react'
import './Blog.css'
import Card from './Card'
import { Button } from '@material-ui/core';
import {Link} from "react-router-dom"

function Blog() {
    return (
        <div className="blog_header" >
        <div className="blog">
            <h1>Blog</h1>
            <p>Read interesting articles on various topics ranging from Gamification to Science and Environment.</p>
            <img src="https://i.ibb.co/K7H9khR/Screenshot-2020-12-14-at-12-27-51-AM.png" />
            </div>

           
           
           
<div className="blog_title">
    <h1>Games</h1>
    </div>
           <div className="blog_card">
               <Link to="/BlogDetail" className="blog_link" >
            <Card
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pdFrtlJvN4A5hHhC0H1SEsS4rnZCCLMRaQ&usqp=CAU"
                title="Gamification in Education : How does it work?"
                description="Gamification of education is a best approach for increasing  motivation ... "
              />
                </Link>

                  <Card
                src="https://i.ibb.co/0XsNSCQ/Blog1.jpg"
                title="Is the world moving to HyperCasual games?"
                description="The hyper-casual concept is a reaction against the standard formula for ... "
                
            />
            <Card
                src="
https://i.ibb.co/M8z6mx6/Blog2.jpg"
              title="Player Retention 101 :
Features to retain the player."
                description="Keeping your players interested ... "
              
            />
            
                  <Card
                src="https://i.ibb.co/0XsNSCQ/Blog1.jpg"
             title="Gamification in Education : How does it work?"
                description="Keeping your players interested and engaged in your game is easily the toughest challenge ..."
                price=""
            />
            </div>

            <div className="blog_title"><h1>Environment</h1></div>
<div className="blog_card">
             <Card
             src="https://www.cornwall.ca/en/shared-content/resources/Water-Purification-Plant/shutterstock_335052809.jpg"
            title="Environmental and Health Reasons to Start "
                description="Riding your bicycle, or cycling, has countless..
"
                />

                  <Card
                src="https://thumbs.dreamstime.com/b/vector-feminist-illustration-girl-power-poster-girls-can-do-anything-international-womens-day-136235625.jpg"
                 title="Empowering women as clean energy entrepreneurs
"
                description="Women currently account for approximately 32% of total...  "
                
            />
            <Card
                src="https://i.ibb.co/F4s52ST/images.jpg
"
              title="Environmental education: Knowledge is power!"
                description="Students voiced their concern about... "
                
            />
                 <Card
                src="https://i.ibb.co/0XsNSCQ/Blog1.jpg"
                title="Environmental education:"
                description="Students voiced their concern about ..."
               
            />
            </div>


                    <div className="blog_title"><h1>Technology</h1></div>
<div className="blog_card">
             <Card
             src="https://i.ibb.co/t4WdLLK/4157-200221100926.jpg"
              title="Sacramento forum is one of the year’s best "
                description="In recent years, California’s role as sustainability leader has become ...  "
               />

                  <Card
                src="https://i.ibb.co/M8z6mx6/Blog2.jpg"
               title="Why California gets to write its own auto emissions standards"
                description="On April 2, Environmental ... "
               
            />
            <Card
                src="https://i.ibb.co/Vj6QmnW/download.jpg"

              title="Recycling Solutions Summit"
                description="Recycling, one of the most important actions we all can do to protect our ... "
            />
                 <Card
                src="https://i.ibb.co/qBnN3xS/cosmo-consult-erp-branche-recycling-shutterstock-709345003.jpg"
               title="Recycling Solutions "
                description="Recycling, one of the most important actions we all can do to protect... "
                
            />
            </div>
           
                </div>
        
    )
}

export default Blog
