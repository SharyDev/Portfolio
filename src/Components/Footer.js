import React from "react";
import emailjs from 'emailjs-com';
import cimg from "../assets/clogo.jpg";
import { FaLinkedinIn,FaGithub,FaInstagram } from "react-icons/fa";
import { BiAt } from "react-icons/bi";

function Footer() {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_rx5jthj', 'shahroz_portfolio', e.target, 'FffvRI5KgOoUul6f6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    return (
        <>
            <div className="contact">
            <h1 className="f-head">
            Get In Touch
                </h1>
            <div className="containter-f">
            <div className="soc-f" data-aos="fade-right" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <img src={cimg} className="img-c"></img><br/>
            <a href="https://www.linkedin.com/in/sharydev/" >
            <FaLinkedinIn className="link-f"></FaLinkedinIn>
            </a>
            <a href="https://github.com/SharyDev" >
            <FaGithub className="git-f"></FaGithub>
            </a>
            <a href="https://www.instagram.com/shahrozdev/" >
            <FaInstagram className="insta-f"></FaInstagram>
            </a>

            <br/>
            <div className="mail-c">
            <a href="mailto:shahroz.abbas2018@gmail.com" className="a-ma-f">
            <BiAt className="mail-f" ></BiAt><span className="s-mail">shahroz.abbas2018@gmail.com</span>
            </a>
            </div>
            </div>
            <div className="containter-f2" data-aos="fade-left" data-aos-easing="ease-out-cubic"
        data-aos-duration="1000">
            <h1 className="f2-h2">Let's Talk</h1>
            <p className="f-p1">Whether you have a question or want to hire me,<br></br> My inbox is always open.</p>
            <form onSubmit={sendEmail} className="form-f">
            <div className="f-t-n">
            <label >Name</label><br></br>
                <input type="text" placeholder="Enter Name Here" className="c-n" name="name"></input><br/><br/>
                </div>
                <div className="f-t-e">
                <label>Email</label><br/>
                <input type="email" placeholder="Enter Email Here" className="c-e" name="user_email"></input><br/><br/>
                
                </div>
                
                <div className="f-t-m">
                <label>Message</label><br></br>
                <textarea  className="c-m"  placeholder="Enter Message" name="message" maxLength="400" wrap="physical" rows="1" cols="50" ></textarea>
                </div>
                <br/>
                <input type="submit" className="btn-f" value="Send Message"></input>
            </form>
        </div>
            </div>
            </div>
        </>
    );
}

export default Footer;