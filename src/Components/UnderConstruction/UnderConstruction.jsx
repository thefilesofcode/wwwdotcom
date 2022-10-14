import React from "react";
import "./UnderConstruction.css";
// import unicorn from "../../Images/unicorn.webp";
// import ""kit.fontawesome.com/667417c7ec.js"
import logo from "../../Images/logo.png"
import logo2 from "../../Images/logo2.png"

export const UnderConstruction = () => {
    return (
        <>
         <script src="https://kit.fontawesome.com/667417c7ec.js" crossorigin="anonymous"></script>

        <div className="templogo">
        <img src={logo2} className="underconstructlogo" alt="logo2" />
        </div>
        <div class="background"></div>
        <div class="container">
            <div class="top">
            <hr></hr>
                {/* <p>WWW DOT COM</p> */}
                <img src={logo} className="underconstructlogo" alt="logo" />
                <hr></hr>
            </div>
            <h1>Something awesome is loading...</h1>
            <h3>PROGRESS</h3>
            <div class="progress-wrapper">
                <div class="progress"><span>0%</span></div>
            </div>
        </div>
        </>
    )
}