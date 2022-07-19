///@author: Bertan Berker
///This is the page where where we can see the location of our coffee shop


import React from 'react';
import './location.css';
import map from "./maps.png";

/// Google Maps
/// paragraph

function Location() {
    
   
    return(
        <body>
            
            <div class="topnav">
                <a class="navnav" href = '/HomePage'>Home</a>
                <a href = '/Contact'>Contact Us</a>
                <a href = '/About'>About Us</a>
                <a href = '/Menu'>Menu</a>
                <a href = '/Location'>Our Location</a>
            </div>

            <div class= "location-par">
                <p class = "parr">Come and pay us a visit!</p>
                <p class = "parr2">90 Bedford St, New York, NY</p>
            </div>
            
            <div class = "screenshot"> 
                <img class = "map" src={map} alt="map"/>
            </div>
            
        </body>
    );
    
    
}

export default Location;