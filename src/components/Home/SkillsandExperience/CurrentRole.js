import React from "react";
import "../../../styles/skills.style.css";

export default class CurrentRole extends React.Component {
  state = {
    roles: this.props.roles,
    responsibilityDisplay: [],
  };
  toggleDisplayForResponsibilities(key) {
    let currentArr = this.state.responsibilityDisplay;
    if (
      this.state.responsibilityDisplay[key] == null ||
      this.state.responsibilityDisplay[key] === false
    ) {
      currentArr[key] = true;
      this.setState({ responsibilityDisplay: currentArr });
    } else {
      currentArr[key] = false;
      this.setState({ responsibilityDisplay: currentArr });
    }
  }
  render() {
    const roles = this.props.roles;
    const rolesContent = roles.map((roles) => (
      <div className="cr-main-intro" key={roles.key}>
        {roles.key === 0 && <span className="role-type">Current Role</span>}
        {roles.key === 1 && <span className="role-type">Previous Role(s)</span>}
        <div className="current-role">
          <div className="current-role-content">
            <div className="current-role-intro">
              <div
                className={
                  this.state.responsibilityDisplay[roles.key]
                    ? "current-role-info cri-center"
                    : "current-role-info cri-flex-start"
                }
                // className="current-role-info"
              >
                <h3 className="role-title">⭐ {roles.name}</h3>
                <section>
                  <span className="at">@</span>
                  <a className="role-at" href={roles.at_url}>
                    {roles.at}
                  </a>
                </section>

                <section className="roles-div">
                  <span className="timespan">
                    ⌛ From {roles.from} - {roles.to}
                  </span>
                  <button
                    className="next"
                    onClick={() => {
                      this.toggleDisplayForResponsibilities(roles.key);
                    }}
                  >
                    {this.state.responsibilityDisplay[roles.key]
                      ? "\u003C"
                      : "\u003E"}
                  </button>
                </section>
                <section></section>
              </div>
              <div
                // className="current-role-responsibilities"
                className={
                  this.state.responsibilityDisplay[roles.key]
                    ? "current-role-responsibilities"
                    : "current-role-responsibilities nodisplay"
                }
              >
                <span style={{ color: "yellow", margin: "0.5em 1em" }}>
                  Responsibilities
                </span>

                <ul>
                  {roles.responsibilities &&
                    roles.responsibilities.map(function (task, index) {
                      return (
                        <li className="li-task" key={index}>
                          {task}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
    return <>{rolesContent}</>;
  }
}
