/// @author: Bertan Berker
/// This is the Contact page

import React from 'react';
import Gunther from './gunther.webp';
import './contact.css';

function Contact() {
    
    /// Navigation Bar

    /// Picture of Gunther on the left

    /// Contact info on the right
    
    return (
    
        <body>
            
            
            <div class="topnav">
                <a class="navnav" href = '/HomePage'>Home</a>
                <a href='/Contact'>Contact Us</a>
                <a href = '/About'>About Us</a>
                <a href = '/Menu'>Menu</a>
                <a href = '/Location'>Our Location</a>
            </div>


            <div class = "photo"> 
                <img class = "gunther" src={Gunther} alt="gunther"/>
            </div>

            <div class = "info">

                <header>Contact Us:</header>
                <p>Phone: 332 -CENTRAL </p>
                <p>Email: centralPark@gmail.com</p> 


            </div>

        </body>

    );
}

export default Contact;