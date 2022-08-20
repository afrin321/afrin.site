import React from "react";
import "../../styles/aboutme.style.css";

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="breadcrumb-div">
        <h3 className="breadcrumb-link">
          <a>Home</a>
        </h3>
        <h3>&#62;</h3>
        <h1>About</h1>
      </div>
      <div className="about-main-intro">
        <div className="greet">
          Hey, I'm Afrin. 🙋🏻 <br /> Nice to meet you
        </div>
        <div className="intro">
          I am a Software Engineer, Web Developer, and Front-End Engineer. I
          like building solutions for complex and diverse problems. I am
          currently focused on constructing stunning UI/UX for sites and
          integrating this with the backend. I continuously learn new
          technologies and maintain standard coding practices in my work.
        </div>
      </div>
      <div className="br-point">
        <span>&#x2022;</span>
        <span>&#x2022;</span>
        <span>&#x2022;</span>
      </div>
      {/* <div className="about-main-intro">
        <div className="quotes">
          I create beautiful websites your users will love. I work with you from
          start to finish to make sure your goals are reached and your users are
          happy.
        </div>
      </div>
      <div className="br-point">
        <span>&#x2022;</span>
        <span>&#x2022;</span>
        <span>&#x2022;</span>
      </div> */}
      <div className="about-main-intro">
        <div className="greet">Education and Background 🎓</div>
        <div className="intro">
          <div>
            I have a Bachelor's Degree in Computer Science and Software
            Engineering. I started the degree in May 2017 and graduated in
            August 2021. I thoroughly enjoyed my academic years exploring the
            diverse areas of this field. Learn more about my Academic Background{" "}
            <a className="abt-link">here</a>.
          </div>
        </div>
      </div>
      <div className="br-point">
        <span>&#x2022;</span>
        <span>&#x2022;</span>
        <span>&#x2022;</span>
      </div>
      <div className="about-main-intro">
        <div className="greet"> Skills and 💻Experience </div>
        <div className="intro">
          <div>
            I have more than a year of industry experience. Apart from this, I
            also build multiple side projects on a regular basis. I have
            experience in wide range of tech stacks and I am skilled in working
            with frontend as well as backend technologies. Learn more about my
            skills <a className="abt-link">here</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
