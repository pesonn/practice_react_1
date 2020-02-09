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
    if(this.props.camera === "apod") {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`);
      const data = await response.json();
      this.setState({
        isLoaded: true,
        img: data.url,
      })
    } else {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${this.props.camera}&api_key=${APIKEY}`);
        const data = await response.json();
        this.setState({
          isLoaded: true,
          img: data.photos[Math.round(Math.random() * (data.photos.length - 1))].img_src,
        })
    }
    
    
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
      <div className="imgwrapper">
      {!this.state.isLoaded ? 
      <p>Loading...</p> : <img src={this.state.img} className="nasaimg"></img>}</div>
     
    )
  }
}

