import React from "react";
import "./css/Landing.css";
import { NavLink } from "react-router-dom";

function login() {
  return (
    <div className="login">
      <img
        style={{ width: 50, height: 50 }}
        src="https://www.flaticon.com/svg/static/icons/svg/732/732228.svg"
        id="logo"
      />
      <br />
      <h style={{ marginLeft: 600 }}>Who's watching Netflix?</h>
      <div class="acc">
        <img
          src="https://occ-0-2041-3662.1.nflxso.net/art/dd717/c1c1d3972f7a262e7429a7422498b6cbe18dd717.png"
          id="profile-pic"
        />
        <span></span>
        <NavLink to="/Landing">
          <img
            src="https://occ-0-2041-3662.1.nflxso.net/art/0d282/eb648e0fd0b2676dbb7317310a48f9bdc2b0d282.png"
            id="profile-pic"
          />{" "}
        </NavLink>
        <span></span>

        <img
          src="https://occ-0-2041-3662.1.nflxso.net/art/74e71/a0b9ffd5b4892d2e41140d6a086f0983fd074e71.png"
          id="profile-pic"
        />

        <span></span>
        <NavLink to="./singIn">
          <img
            src="http://nsbemac.ca/wp-content/uploads/2016/02/512px-Plus_sign_font_awesome.svg_.png"
            id="profile-pic"
          />
        </NavLink>
      </div>

      <div class="name">
        <p>Abigail</p>
        <p>Deniz</p>
        <p>Ashley</p>
        <p>Add profile</p>
      </div>

      <button className="button1">Manage profile</button>
    </div>
  );
}

export default login;
