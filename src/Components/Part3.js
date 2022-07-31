import React from "react";

function Part3 () {
    return(
        <>
        <div className="skills" >
        <h1 className="p3-t" data-aos="zoom-out-right" data-aos-easing="ease-out-cubic"
                 data-aos-duration="1000">Skills</h1>
       <div className="p3-circles">
            <div className="circle-r" data-aos="fade-right" data-aos-easing="ease-out-cubic"
                 data-aos-duration="1000">
            <svg >
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" className="r2"></circle>
             </svg>
                <div className="react">
              React

                </div>
            </div>
            <div className="circle-rn" data-aos="fade-right" data-aos-easing="ease-out-cubic"
                 data-aos-duration="1000">
            <svg >
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" className="rn2"></circle>
             </svg>
                <div className="react-n" >
             React<br/>Native
                </div>
            </div>
            <div className="circle-n" data-aos="fade-left" data-aos-easing="ease-out-cubic"
                 data-aos-duration="1000">
            <svg >
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" className="n2"></circle>
             </svg>
                <div className="node">
             Node
                </div>
            </div>
            <div className="circle-m" data-aos="fade-left" 
                 data-aos-duration="1000">
            <svg >
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" className="m2"></circle>
             </svg>
                <div className="mysql">
             MYSQL
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default Part3;