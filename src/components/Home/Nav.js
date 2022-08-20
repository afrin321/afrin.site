import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav>
      <NavLink to="" className="nav-brand">
        Afrin Haque{" "}
        <span style={{ fontSize: "1.45em", fontStyle: "none" }}>👩🏻‍💻 </span>
      </NavLink>
      <NavLink
        to="aboutme"
        className={({ isActive }) =>
          isActive ? "active-nav-item nav-item" : "nav-item"
        }
      >
        About
        {/* 🙋🏻 */}
      </NavLink>
      <NavLink
        to="education"
        className={({ isActive }) =>
          isActive ? "active-nav-item nav-item" : "nav-item"
        }
      >
        Skills and Experience
        {/* 💻 */}
      </NavLink>

      <a className="nav-item" href="./">
        Projects
        {/* 📽️ */}
      </a>
      <a className="nav-item" href="./">
        Contact
        {/* 📱 */}
      </a>
    </nav>
  );
}
