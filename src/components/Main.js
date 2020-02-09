import React from "react";
import NasaAPI from "./NasaAPI";

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      camera: "mast", 
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({camera: event.target.value})
    console.log("event = " + event.target.value)
  }

 
 
  render() {
    console.log(this.state.camera)
    return(
      <main className="maincontent">
        <form>
          <select value={this.state.camera} onChange={this.handleChange}>
            <option value="apod">Picture of the Day</option>
            <option value="mast">Mast Camera</option>
            <option value="rhaz">Rear Hazard Camera</option>
            <option value="navcam">Navigation Camera</option>
          </select>
        </form>
        <NasaAPI camera = {this.state.camera}/>
      </main>
    )
    
  }
}
