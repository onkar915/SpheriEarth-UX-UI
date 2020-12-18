import React from 'react'
import './BlogDetail.css'
import Like from './Like'
function BlogDetail() {
    return (
        <div className="blog_detail">

             <div className="blog">
            <h1>Blog</h1>
            <p>Read interesting articles on various topics ranging from Gamification to Science and Environment.</p>
            <img src="https://i.ibb.co/K7H9khR/Screenshot-2020-12-14-at-12-27-51-AM.png" />
            </div>
           
           <div className="blog_section">
               <h1>Gamification in Education : How
does it work?</h1>
<h5>Write by author name</h5>
<p>Gamification of education is a developing approach for increasing learners’ motivation and engagement by incorporating game design elements in educational environments. With the growing popularity of gamification and yet mixed success of its application in educational contexts, the current review is aiming to shed a more realistic light on the research in this field by focusing on empirical evidence rather than on potentialities, beliefs or preferences. Accordingly, it critically examines the advancement in gamifying education. The discussion is structured around the used gamification mechanisms, the gamified subjects, the type of gamified learning activities, and the study goals, with an emphasis on the reliability and validity of the reported outcomes. To improve our understanding and offer a more realistic picture of the progress of gamification in education, consistent with the presented evidence, we examine both the outcomes reported in the papers and how they have been obtained. While the gamification in education is still a growing phenomenon, the review reveals that (i) insufficient evidence exists to support the long-term benefits of gamification in educational contexts; (ii) the practice of gamifying learning has outpaced researchers’ understanding of its mechanisms and methods; (iii) the knowledge of how to gamify an activity in accordance with the specifics of the educational context is still limited. The review highlights the need for systematically designed studies and rigorously tested approaches confirming the educational benefits of gamification, if gamified learning is to become a recognized instructional approach.
</p>

<p>The idea of incentivizing people is not new but the term “gamification” didn’t enter the mainstream vocabulary until 2010. Only a year later it became a viable trend. The growing popularity of gamification is stemming from the belief in its potential to foster motivation, behavioral changes, friendly competition and collaboration in different contexts, such as customer engagement, employee performance and social loyalty.
.</p>
<p>
Ever since its advent gamification has sparked controversy between game designers, user experience designers, game theorists and researchers in human-computer interaction (Mahnič, 2014). This controversy is reflected also in some scientific studies of gamification, which show that its effect on motivation or participation is lower than the expectations created by the hype (Broer, 2014). Even so, substantial efforts have sought to take advantage of the alleged motivational benefits of gamification approaches.</p>



           </div>
           <div className="section_two">
               <h2>Gamification in Education : 
How does it work?</h2>
<h2>Is the world moving to
 HyperCasual games?</h2>
           </div>

           <Like />
        </div>
    )
}

export default BlogDetail
