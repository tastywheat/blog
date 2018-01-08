import React, { Component } from 'react';

import './style.css';

class About extends Component {
  render() {
    return (
      <div className="about-overview">
        <h1>Cry. But for the right reasons.</h1>
           	<div>
            	<img className="about-overview__mainimage" src="https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/13074/Tears%20Cropped.jpg?w=660" alt="#"/></div>
            <div className="about-overview__text">
            	
            	<p>“There are three things we cry for in life: things that are lost, things that are found, and things that are magnificent.” </p>
           		<h3>― Douglas Coupland -</h3>
           		<p>This is what it means to be human. To feel overcome with emotion when we have to say goodbye, 
           		and when we experience discovery, and when we look out at the world and are suddenly struck by how incredible it is. 
           		When we cry for these things, we are truly fucking alive.
        			And you can’t be too proud to cry. You can’t believe that crying is a sign of weakness, that boys don’t cry, any of that machismo 19th century bullshit. 
        			Crying is good. Crying is healthy. Cry for the right reasons.</p>
    		    </div>

        <h1>Take care of each other.</h1>
          <div>
          	<img className="about-overview__subimage" src="https://cdn-images-1.medium.com/max/1600/1*Ww305_8Vag1qKoEgPmCXgA.jpeg" alt="" /></div>
          <div className="about-overview__text">
          
          	<p>“We’re all just walking each other home.”</p>
         		<h3>― Ram Dass -</h3>
         		<p>We have to look after each other. We have to make sure we all get to wherever we are going together. 
         		It’s so incredibly easy to forget to be human, and we do it all the time. We hurt other people. We betray other people. 
         		We ignore other people. But that’s no way to live.
      			You have to reach out and touch the rest of the world. The other people. The other isolated souls. 
      			And you can do this online, you don’t even have to leave the fucking house. Find someone. Walk them home.</p>
  		    </div>

        <h1>Don’t overthink it.</h1>
         	<div>
          	<img className="about-overview__subimage" src="https://cdn-images-1.medium.com/max/1600/1*Dzo1N1Jv7Vv3r-UQPKEXcA.jpeg" alt="" /></div>
          <div className="about-overview__text">

          	<p>“Sometimes the questions are complicated and the answers are simple.” </p>
         		<h3>― Dr. Seuss -</h3>
         		<p>A lot of the time, you don’t need to stress, worry, analyse and overthink. 
         		You need to take it one step at a time and let go of the bigger picture. It’s a lot more complex to attempt to solve everything all at once, 
         		when what you really need to be doing is coming up with the simplest answer for the simplest part of the problem.
  			   Sometimes the questions are incredibly complicated. But only because we let them be, only because we don’t learn how to examine those questions at their smallest level.</p>
  	     	</div>

      </div>
    );
  }
}

export default About;
