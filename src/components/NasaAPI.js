import React from "react";

export default class NasaAPI extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      items: {},
      isLoaded: false,
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${props.camera}&api_key=DEMO_KEY`
    }

    this.props= {
      camera: props.camera
    }
  

  }
  
  async componentDidMount() {
    const response = await fetch(this.state.url);
    const data = await response.json();
    this.setState({
      isLoaded: true,
      items: data.photos[Math.floor(Math.random() * 2)],
      
    })
      
  }

  function changeUrl(selectedcamera) {
    this.setState({url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${selectedcamera}&api_key=DEMO_KEY`}) 
    
  }; // TODO: Wie erstelle ich hier eine Funtion???

  

  componentDidUpdate() {
    console.log("state " + this.props.camera);
    changeUrl(this.props.camera)
    console.log("state " + this.state.url);
   
  }

  

  render() {
    const img = this.state.items.img_src
    console.log(img)

    return(
      <div>
        {!this.state.isLoaded ? <p>Loading...</p> : null}
        <img src={img} className="nasaimg"></img>
      </div>
    )
    
  }
}

