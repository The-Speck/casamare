import React from 'react';
import Footer from './footer';
import { Route } from 'react-router-dom';

class SplashBody extends React.Component {
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

          <button></button>
        </div>
        <Route exact path="/" component={Footer}/>
      </div>
    );
  }
}

export default SplashBody;
