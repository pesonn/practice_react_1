import React from "react";

class NavBar extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <nav className="navbar">
        <img src="logo512.png" alt=""/>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>More</li>
        </ul>
      </nav>
    )
  }
}
  
export default NavBar