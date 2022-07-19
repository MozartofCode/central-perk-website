///@author: Bertan Berker
///By using the Spoonacular API, I give customers a selection of coffee and food to choose from
///There is 4 different type food/drink that I display and also I give the option of search to
/// the customer

/// The Json file that I use to display products belong to:
/// Jan 1, 2018
// Extracted from https://www.starbucks.com/menu/catalog/product#view_control=product&drink=iced-coffee
// MIT license - Author: LarryBattle

import React from 'react';
import './menu.css';
import Coffee from "./coffee.jpeg";
import CupCake from "./cupcake.jpg";
import CheeseCake from "./cheesecake.jpg";
import Tea from "./tea.jpg";
import { useNavigate} from 'react-router-dom';

function Menu() {

    const navigate = useNavigate();

    const navigateToSearch = () => {
        // 👇️ navigate to /Search
        navigate('/Search');
      };

    return (

        /// Navigation Bar
        /// Search, input place
        /// 4 items on display

        <body>

            <div class="topnav">
                <a class="navnav" href = '/HomePage'>Home</a>
                <a href = '/Contact'>Contact Us</a>
                <a href = '/About'>About Us</a>
                <a href = '/Menu'>Menu</a>
                <a href = '/Location'>Our Location</a>
            </div>

           <header class = "menu-title">Some of our Customer Favorites</header>

            <div class = "search">
                <button class = "item" onClick = {navigateToSearch}>CLICK HERE TO SEARCH FOR MORE ITEMS</button>
            </div>


            <div class = "coffee">
                <img class = "c" src={Coffee} alt="coffee"/>
            </div>

            <div class = "tea">
                <img class = "t" src={Tea} alt="tea"/>
            </div>

            <div class = "cupcake">
                <img class = "cup" src={CupCake} alt="cupcake"/>
            </div>

            <div class = "cheesecake">
                <img class = "cheese" src={CheeseCake} alt="cheesecake"/>
            </div>


        </body>

    );
}

export default Menu;