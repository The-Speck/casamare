import React from 'react';

class SplashBody extends React.Component {
  componentDidMount() {
    const splashVideo = document.getElementById("splashVid");
    splashVideo.play();
  }

  render () {
    return (
      <div className='splash-body'>
        <video autoPlay muted loop id="splashVid">
          <source src={window.splashLink} type="video/mp4"/>
        </video>

        <button></button>
      </div>
    );
  }
}

export default SplashBody;
