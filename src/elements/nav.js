import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <nav
    role="navigation"
    aria-label="main navigation"
    className="navbar navbar-guest"
  >
    <div className="container">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <h1 className="title has-text-centered is-2 hp-title">Hacker News</h1>
        </a>
        <button
          data-target="navMenu"
          className={
            props.toggle
              ? "button navbar-burger is-active"
              : "button navbar-burger"
          }
          onClick={() => props.toggleClick()}
        >
          <span /> <span /> <span />
        </button>
      </div>
      <div
        id="navMenu"
        className={props.toggle ? "navbar-menu is-active" : "navbar-menu"}
      >
        <div className="navbar-start">
          {props.content.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={
                props.active === item.id
                  ? item.className + " active"
                  : item.className
              }
              id={item.id}
              onClick={() => props.onClick(item.id)}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="navbar-end">
          <div
            className={props.isLogInNav ? "navbar-item active" : "navbar-item"}
          >
            <Link to="/user/login" onClick={() => props.onClick("user-log-in")}>
              SIGN IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export { NavBar };
