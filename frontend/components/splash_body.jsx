import React from 'react';
import Footer from './footer';
import { Route, NavLink } from 'react-router-dom';

class SplashBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selected: 'buy' };
  }

  componentDidMount() {
    const splashVideo = document.getElementById("splashVid");
    splashVideo.play();
  }

  render () {
    return (
      <div>
        <div className='splash-body'>
          <video autoPlay muted loop id="splashVid">
            <source src={window.splashLink} type="video/mp4"/>
          </video>

          <div className='home-page-container'>
            <div className='home-page-buttons'>
              <button className={`home-page-button ${}`}>Buy</button>
              <button className='home-page-button'>Rent</button>
              <button className='home-page-button'>Sell</button>
            </div>
            <span className='search-selector'></span>
            <input className='home-page-search' placeholder='Enter a neighborhood, city, address or ZIP code'></input>
          </div>
        </div>
        <Route exact path="/" component={Footer}/>
      </div>
    );
  }
}

export default SplashBody;
