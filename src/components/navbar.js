import React, { Component } from 'react';


class NavBar extends Component {
   
    style={
        color: 'red'
    }
    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand mb-0 h1" href="#"> Total Counts {" : "}
            <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}</span>
            {/* {this.props.totalCounters++} */}
            </a>
            <p style={this.style}>NavBar Component</p>
            </nav>
          );
    }
}
 
export default NavBar;