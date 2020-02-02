import React from "react";

class Header extends React.Component {
  constructor() {
    super()
    this.state= {}

  }

  render() {
    return(
      <header className="header">
        <h1>First React App</h1>
      </header>
    )
  }
}

export default Header