import React from 'react';
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div className="navigation">
          <div>
      
          {/* <a href="">Home</a> */}
          <Link className="Link-One" to="/"> Home </Link>
          
        </div>
        <div>
          {/* <a href="">About</a> */}
          <Link className="Link-Two" to="/about"> About </Link>
        </div>
        <div>
          {/* <a href="">Contact</a> */}

          <Link className ="Link-Tree" to = "/contact"> Contact </Link>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Navigation;
