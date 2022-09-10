import React from "react";
import img from "../assets/Par1-bg.jpg";
import { scroller } from "react-scroll";

function Part1 () {
    function  scrollToContact () {
        scroller.scrollTo("contact", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
    }
    return(
        <>
            <div className="home">
            <div className="text-p1"  >
                <h1 className="P1-h1">Hi, I'm Shahroz</h1>
                <h3 className="P1-p">A design-minded Developer
                <br/>focused on building beautiful
                <br/>interfaces & experiences.</h3>
                <button className="b-p1" onClick={scrollToContact} ><p className="bt-p1">Hire Me</p></button>
                </div>
                <img src={img} className="part1-img" ></img>
                
            </div>
        </>
    );
}

export default Part1;