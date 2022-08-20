import React from "react";
import "../../styles/skills.style.css";
import CurrentRole from "./SkillsandExperience/CurrentRole";
import Skills from "./SkillsandExperience/Skills";

export default class Education extends React.Component {
  state = {
    currentDisplay: "current-role",
    roles: [
      {
        key: 0,
        name: "Junior Software Engineer",
        at: "TigerIT Bangladesh Limited",
        at_url: "https://www.tigerit.com/",
        from: "Sept' 21",
        to: "Present",
        responsibilities: [
          "Working on Web portal for goverment/state projects. Built frontend using Jsp, CSS, JavaScript and Jstl. Built backend using Spring MVC",
          "Building and maintaining Web clients for multiple projects using Spring Boot and Thymeleaf. Focused on ",
          "Building Desktop applications using C#, Dot net and WPF. Added multiple modules.",
          "Contructing the frontend for IAM application that runs across multiple projects. Explored and experimented while development using React, Vue Next and Nuxt Js",
        ],
      },
      {
        key: 1,
        name: "Software Engineer Intern",
        at: "TigerIT Bangladesh Limited",
        at_url: "https://www.tigerit.com/",
        from: "June' 21",
        to: "Sept' 21",
        responsibilities: [
          "Developed a Background Removal application for Full-Frontal, Facial images using Machine Learning",
          "Worked with and implemented different Deep Learning algorithms used for Object Detection and Image Segmentation",
          "Hands-on experience in different ML libraries and frameworks such as TensorFlow and Keras and a number of Image processing libraries including OpenCV and PIL",
          "Designed an Object-Oriented system for the application. Included essential tasks of datasets preparation, training and prediction",
        ],
      },
    ],
  };

  render() {
    let content;
    if (this.state.currentDisplay == "current-role") {
      content = <CurrentRole roles={this.state.roles} />;
    } else if (this.state.currentDisplay == "skills") {
      content = <Skills />;
    }
    return (
      <div className="skills-container">
        <div className="breadcrumb-div">
          <h3 className="breadcrumb-link">
            <a>Home</a>
          </h3>
          <h3>&#62;</h3>
          <h1>Skills & Experience</h1>
        </div>
        <div className="skills-main-intro">
          <div className="sub-menu">
            <div className="sub-menu-child">
              <a
                onClick={() => {
                  this.setState({ currentDisplay: "current-role" });
                }}
              >
                Experience
              </a>
              |
              <a
                onClick={() => {
                  this.setState({ currentDisplay: "skills" });
                }}
              >
                Skills
              </a>
            </div>
          </div>
        </div>

        <div className="skills-main">{content}</div>
      </div>
    );
  }
}
