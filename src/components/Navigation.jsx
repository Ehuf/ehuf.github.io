import React, { Component } from "react";
import "./navigation.scss";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var toggle = document.querySelectorAll(".toggle")[0];
    var nav = document.querySelectorAll("nav")[0];
    var toggle_open_text = '';
    var toggle_close_text = 'X';
    
    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        
      if (nav.classList.contains('open')) {
        toggle.innerHTML = toggle_close_text;
      } else {
        toggle.innerHTML = toggle_open_text;
      }
    }, false);
    
    setTimeout(function(){
        nav.classList.toggle('open');	
    }, 800);
  }


  render() {
    return (
      <nav class="top-right open">
        <a className="disc l1">
          <div className="nav-label">and digital</div>
        </a>
        <a className="disc l2">
          <div className="nav-label">github</div>
        </a>
        <a className="disc l3">
          <div className="nav-label">resume</div>
        </a>
        <a className="disc l4">
          <div className="nav-label">linkedin</div>
        </a>
        <a className="disc l5 toggle" />
      </nav>
    );
  }
}

export default Navigation;
