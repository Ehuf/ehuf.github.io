import React, { Component } from 'react';
import Particles from "react-particles-js";

class Background extends Component {

    render() { 
        return (
            <div>
                <div id="particles-js"></div>
                <script src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
            </div> 
         );
    }
}
 
export default Background;