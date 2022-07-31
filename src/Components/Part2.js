import React,{ useEffect } from "react";
import bg from "../assets/Par2-bg.png";
import img from "../assets/P-2.jpg";

function Part2 () {
   
    return (
        <>
            <div className="about" >
            
                <h1 className="h1-p2">
                    About Me
                </h1>
                
                <div className="images-p2" data-aos="fade-down"  data-aos-duration="1000">
                <img src={bg} className="bg-p2"></img>
                <img src={img} className="img-p2"></img>
                </div>
                <div className="text-p2" >
                <p className="h1-p2-1"><span className="h1-p2-w">Hello!</span> My Name is Shahroz, I like making stuff that live on the internet, Whether it's websites, applications, or anything in between</p>
                <p className="h1-p2-2">As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product.</p>
                <p className="h1-p2-3">My goal is to build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.</p>
                </div>
            </div>
        </>
    );
}

export default Part2;