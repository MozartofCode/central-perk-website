/// @author: Bertan Berker
/// This is the home page where customers can browse and order

import React from 'react';
import './homePage.css';
import friends from './friends.webp';

function HomePage() {
    
    return (
        
        /// Top - Navigation
        /// Quote from Rachel Green
        /// Picture of some Friends sitting in our famous couch :)

        <body>

            <div class="topnav">
                <a className = "navnav" href = '/HomePage'>Home</a>
                <a href='/Contact'>Contact Us</a>
                <a href = '/About'>About Us</a>
                <a href = '/Menu'>Menu</a>
                <a href = '/Location'>Our Location</a>
            </div>

            <div class = "photo">
                <img class = "friends" src={friends} alt="friends" />
            </div>

            <div class = "quote" >
                <p>"So This Is A Half-Caf, Double Tall, Easy Hazelnut, Non-Fat,
                     No Foam With Whip, Extra Hot Latte."</p> 
                     <p> - Central Perk Waitress, Rachel Green</p>
            </div>

            

        </body>



    );

}

export default HomePage;