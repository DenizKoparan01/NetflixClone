import React, { Component } from "react";
import "./css/singIn.css";

class singIn extends Component {
  render() {
    return (
      <div>
        <div id="vertical-flip" class="card">
          <div class="flip">
            <div class="front">
              <div class="logo">
                <img
                  className="img"
                  src="https://truecostmovie.com/img/TTC/wp-content/uploads/2015/10/netflix_logo_digitalvideo-1.png"
                  alt="Netlflix"
                />
              </div>
            </div>

            <div class="back">
              <form>
                <div class="box-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="&#xf007;"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="&#xf023;"
                    required
                  />
                  <button className="button2" type="submit">
                    LOGİN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default singIn;
