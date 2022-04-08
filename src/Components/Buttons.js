import React from "react";
import "./Buttons.css"
import email from "./images/email.svg"
import linkedin from "./images/linkedin.svg"

export default function Buttons(){
    return(
        <div className="buttons">
            <button className="email"><img src={email} alt="email"></img>Email</button>
            <button className="linkedin"><img src={linkedin} alt="linkedin"></img>Linkedin</button>
          </div>
    )
}