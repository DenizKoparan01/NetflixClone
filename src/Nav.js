import React, { useEffect, useState } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import { NavLink } from "react-router-dom";

import "./css/nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 180) {
        handleShow(true);
      } else handleShow(false);
    });
  });
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      ></img>

      <div id="menu" class="ui secondary  menu">
        <NavLink to="/notFound">
          <a class="active item">Home Page</a> <a class="item">Series</a>
          <a class="item">Movies</a>
          <a class="item">The Newests</a>
          <a class="item">My List</a>
        </NavLink>
      </div>
      <img
        class="nav_avatar1"
        src={require("./images/bellsvg.png")}
        alt="Netflix Logo"
      ></img>
      <NavLink to="/search">
        <img
          class="nav_avatar2"
          src={require("./images/search.png")}
          alt="Netflix Logo"
        ></img>
      </NavLink>

      <img
        class="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Logo"
      ></img>
    </div>
  );
}

export default Nav;
