import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

import HomePage from './pages/Home/HomePage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Location from './pages/Location/Location';
import Menu from './pages/Menu/Menu';
import Search from './pages/Menu/Search';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path= "/" element={<App />} />
    <Route path= "HomePage" element={<HomePage />} />
    <Route path= "About" element={<About />} />
    <Route path= "Contact" element={<Contact />} />
    <Route path= "Location" element={<Location />} />
    <Route path= "Menu"  element={<Menu />} />
    <Route path= "Search" element={<Search />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  </BrowserRouter>
);

