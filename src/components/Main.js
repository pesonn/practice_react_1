import React from "react";

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      items: {},
      isLoaded: false,
    }
  }

  async componentDidMount() {
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=DEMO_KEY";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      isLoaded: true,
      items: data.photos[Math.floor(Math.random() * 2)],
      
    })
      console.log(this.state.items.photos)
      
      console.log(this.state.items.img_src)
  }

  

  render() {
    const img = this.state.items.img_src
    console.log(img)

    return(
      <main className="maincontent">
      {!this.state.isLoaded ? <p>Loading...</p> : null}
        
        
        <img src={img} className="nasaimg"></img>
      </main>
    )
    
  }
  
}
