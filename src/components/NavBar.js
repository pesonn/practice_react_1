import React from "react";

class NavBar extends React.Component {
  constructor() {
    super()
  
  }

  render() {
    return (
      <div className="navbar--wrapper">
        <nav className="navbar">
          <img src="logo512.png" alt=""/>
          <ul className="navbar--navpoints">
            {/* <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">More</a></li> */}
          </ul>
        </nav>
      </div>
    )
  }
}
  
export default NavBar