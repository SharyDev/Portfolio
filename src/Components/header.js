import React, {useState ,useEffect} from "react";
import { scroller } from "react-scroll";
import logo from "../assets/S.png";
import menulogo from "../assets/menu.png";
import { FaTimes } from "react-icons/fa";
import resume from "../assets/ShahrozAbbas-Resume.pdf";


function Header() {

function  scrollToAbout () {
  scroller.scrollTo("about", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}
function  scrollToHome () {
  scroller.scrollTo("home", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}
function  scrollToSkills () {
  scroller.scrollTo("skills", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}
function  scrollToContact () {
  scroller.scrollTo("contact", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
}

        const [scrolled, setScrolled] = useState(false);
        useEffect(() => {
          window.onscroll = function() {
            if (window.scrollY > 50) {
              setScrolled(true);
            } else {
              setScrolled(false);
            }
          };
        }, []);
        const [menulist, setmenulist] = useState(false);
        function test (){
          if(menulist === false)
          {
            setmenulist(true);
          }
          else{
            setmenulist(false);
          } //456px cursor: default;
          //pointer-events: none;        
          //text-decoration: none;
          //color: white;
          
        }
    
    return (
        <>
        <div className="header-main" onScroll={useEffect}>
            <div className={scrolled ? "header-scroll" : "header"}>
                <div className="logo-h">
                    <a href="/">
                    <img src={logo} className="logo-h"></img>
                    </a>
                </div>
                <div className="header-button">
                
                      <a href="#Part1" onClick={scrollToHome} className={menulist ? "home-h-1" : "home-h"}>Home</a>
                    <a href="#about" onClick={scrollToAbout} className={menulist ? "about-h-1" : "about-h"}>About</a>
                    <a href="#" onClick={scrollToSkills} className={menulist ? "skills-h-1" : "skills-h"}>Skills</a>
                    <a href="#" onClick={scrollToContact}  className={menulist ? "contact-h-1" : "contact-h"}>Contact</a>
                    <a href={resume} className={menulist ? "btn-h-1" : "btn-h"} >Resume</a>
                    <a href="#" className={menulist ? "menulogo-active" : "menu-logo"} onClick={test}><img src={menulogo} className={menulist ? "menu-logo-none" : "menu-logo"}></img></a>
                    <a href="#" className={menulist ? "cbtn-active" : "cbtn-close"} onClick={test}><FaTimes className={menulist ? "cbtn-a-logo" : "cbtn-c-logo"}></FaTimes></a>
                </div>
                
            </div>
            </div>
        </>
    );
}

export default Header;