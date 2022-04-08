import React from "react";
import Twitter from "./images/Twitter.svg"
import Facebook from"./images/Facebook.svg"
import Instagram from "./images/Instagram.svg"
import GitHub from "./images/GitHub.svg"
import "./Footer.css"


export default function Footer(){
    return(
        <footer>
          <div className="social-icons">
            <a href="https://twitter.com/"><img src={Twitter}></img></a>
            <a href="https://www.facebook.com/"><img src={Facebook}></img></a>
            <a href="https://www.instagram.com/rosaismylova/"><img src={Instagram}></img></a>
            <a href="https://github.com/"><img src={GitHub}></img></a>
          </div>
        </footer>
    )
}