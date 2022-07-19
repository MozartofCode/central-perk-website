///@author: Bertan Berker
///This is the about page where there is information about our history


import React from 'react';
import './about.css';

function About() {

    return(

        <body>
            
            <div class="topnav">
                <a class="navnav" href = '/HomePage'>Home</a>
                <a href='/Contact'>Contact Us</a>
                <a href = '/About'>About Us</a>
                <a href = '/Menu'>Menu</a>
                <a href = '/Location'>Our Location</a>
            </div>

            <div class = "facts" >
                <header>Some Facts you Should Know:</header>
                <p>- Central Perk is a small coffee shop in New York City's pretty Greenwich Village!</p>
                <p>- We have the best coffee in New York.</p>
                <p>- Occasionally various TV shows are recorded in our pretty coffee shop...</p> 
            </div>


        </body>
    );
}

export default About;