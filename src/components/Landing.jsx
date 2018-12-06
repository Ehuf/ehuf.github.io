import React, { Component } from "react";
import "./landing.scss";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className="landing-message">
        <script src="https://code.jquery.com/jquery-2.2.4.min.js" />

        <ul className="Words">
          <li className="Words-line">
            <p>&nbsp;</p>
            <p style={{ color: "#ff3244" }}>Mark Shaw</p>
          </li>

          <li className="Words-line">
            <p>Mark Shaw</p>
            <p>Software</p>
          </li>

          <li className="Words-line">
            <p>Software</p>
            <p>Developer</p>
          </li>

          <li className="Words-line">
            <p>Developer</p>
            <p style={{ color: "#ff3244" }}>AND</p>
          </li>

          <li className="Words-line">
            <p>AND</p>
            <p>Chief</p>
          </li>

          <li className="Words-line">
            <p>Chief</p>
            <p>Saxophonist</p>
          </li>

          <li className="Words-line">
            <p>Saxophonist</p>
            <p>&nbsp;</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Landing;
