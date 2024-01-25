import React, {Component}from "react";
import './Header.css'


export default function Header(){
    return(
      <header>
        <div className="top-header">Welcome to Travel World</div>
      <div className="nav-area">
        <img src="https://preview.colorlib.com/theme/travelo/img/logo.png.webp" alt='' className="img"></img>
        <div className="logo" >
        <a href="/" >
          Man
        </a>
        <a href="/" >
          About
        </a>
        <a href="/" >
          Destination
        </a>
        <a href="/" >
          Pages
        </a>
        <a href="/" >
          Blog
        </a>
        <a href="/" >
          Contact Us
        </a>
        </div>
        <div className="social-media-links">
          <ul><i class='fa fa-phone'></i>10(256)-928 256</ul>
          <ul></ul>
        </div>
        
      </div>
    </header>
    )
}