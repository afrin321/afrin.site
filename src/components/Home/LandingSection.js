import React from "react";
import MainImg from "../../images/home_pic_2.jpg";
import SEImg from "../../images/coding.png";
import SDImg from "../../images/software-development.png";
import UIImg from "../../images/ui.png";

export default function LandingSection() {
  return (
    <>
      <div className="main-container">
        <div className="sub-main-container">
          <div className="lp-images">
            <div className="welcome-info">
              <h1>Welcome</h1>
              <p>
                to my <span className="anima-title">WEB DEV</span> Portfolio!
              </p>
              <div className="welcome-buttons">
                <button className="learn-more-btn">Learn more</button>
                <button className="contact-btn">Contact </button>
              </div>
            </div>
            <div className="my-info">
              <span className="image-logo">
                <img src={MainImg} className="main-img" />
              </span>
              <div className="lp-info">
                <span className="my-name">Afrin Haque</span>
                <span className="my-title">SOFTWARE ENGINEER</span>
              </div>
            </div>
          </div>

          {/* <div className="lp-footer">Copyright @ 2022</div> */}
        </div>
      </div>
    </>
  );
}
