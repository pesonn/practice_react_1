import React from "react";



export default class NasaAPI extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      img: "",
      isLoaded: false,
    }

    this.loadAPI = this.loadAPI.bind(this)
    
  }
  

  loadAPI = async () => {
    const APIKEY = process.env.REACT_APP_NASA_API_KEY;
    const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${this.props.camera}&api_key=${APIKEY}`); //TODO: API Key sicher einbinden
    const data = await response.json();
    this.setState({
      isLoaded: true,
      img: data.photos[Math.round(Math.random() * data.photos.length)].img_src,
    }) 
  }
    
  componentDidMount() {
    this.loadAPI(this.props.camera)
  }  

   componentDidUpdate(prevProps) {
   if(prevProps.camera !== this.props.camera) {
    this.setState({isLoaded: false})
    this.loadAPI(this.props.camera)
   }
  }

  render() {
    return(
      <div>
        {!this.state.isLoaded ? <p>Loading...</p> : null}
        <img src={this.state.img} className="nasaimg"></img>
      </div>
    )
  }
}

