import React from "react";
import html from "../assets/HTML5_Logo.svg";
import css from "../assets/css3.png";
import js from "../assets/js-logo.png";
import mysql from "../assets/mysql-logo.png";
import node from "../assets/node-logo.jpg";
import react from "../assets/react-logo.png";
import exp from "../assets/exp-logo.png";
import mangodb from "../assets/db-logo.jpg";

function Part4(){
    return(
        <>
            <div className="p4-main">
                <h1 className="p4-t">
                Technologies and tools I use
                </h1>
            <div className="p4-img" data-aos="fade-right" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
                <img src={html} className="html-p4"></img>
                <img src={css} className="css-p4"></img>
                <img src={js} className="js-p4"></img>
                <img src={mysql} className="sql-p4"></img>
            </div>
            <div className="p4-img-2" data-aos="fade-right" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
                <img src={node} className="node-p4"></img>
                <img src={react} className="react-p4"></img>
                <img src={exp} className="react-n-p4"></img>
                <img src={mangodb} className="m-db-4"></img>
            </div>
            </div>
        </>
    );
}

export default Part4;