/// @Author: Bertan Berker
/// This js file is created for the purpose of allowing the user to search anything on our menu
/// which is basically anything that the Spoonacular API can return :)

import React, {useState} from "react";
import "./Search.css";
import drinks from './menu.json';


function Search() {

    const [searchTerm, setSearchTerm] = useState("");

   
    return (

        <body>

            <div class="topnav">
                <a class="navnav" href = '/HomePage'>Home</a>
                <a href = '/Contact'>Contact Us</a>
                <a href = '/About'>About Us</a>
                <a href = '/Menu'>Menu</a>
                <a href = '/Location'>Our Location</a>
            </div>  

            <div class = "searching">
            
                <input class = "searching-input" type= "text" placeholder= "Search..." 
                onChange = {(event) => {setSearchTerm(event.target.value);}}/>

                {
                    drinks.filter((val) => {
                        if (searchTerm == "" ){
                            return val;
                        }
                        else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val;
                        }
                    }).map((val, key) => {

                        return (
                            <div className = "drink" key = {key}>
                                <p>{val}</p>
                            </div>
                        );
                    })
                }


            </div>

        </body>

    );
}

export default Search;
