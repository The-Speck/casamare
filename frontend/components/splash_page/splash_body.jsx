import React from 'react';
import Footer from '../footer';
import { Redirect } from 'react-router-dom';

class SplashBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = { type: 'buy', search: '', submit: false};

    this.handleTypeButton = this.handleTypeButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const splashVideo = document.getElementById("splashVid");
    splashVideo.play();
  }

  handleTypeButton(e){
    const allowedTypes = ['Rent', 'Buy', 'Sell'];
    if (!allowedTypes.includes(e.target.textContent)) return;

    this.setState({ type: e.target.textContent.toLowerCase() });
  }

  handleSearch(e){
    this.props.updateFilter('area', this.state.search);
    this.setState({ submit: true });
  }

  handleChange(e){
    this.setState({ search: e.target.value});
  }

  render () {
    const { selected, type, submit } = this.state;

    if (submit) return <Redirect to={`/${this.state.type}`}/>;

    return (
      <div>
        <div className='splash-body'>
          <video autoPlay muted loop id="splashVid">
            <source src={window.splashLink} type="video/mp4"/>
          </video>

          <div className='home-page-container'>
            <div className='home-page-buttons'>
              <button onClick={this.handleTypeButton} className={`home-page-button ${type==='buy'?'selected':''}`}>Buy</button>
              <button onClick={this.handleTypeButton} className={`home-page-button ${type==='rent'?'selected':''}`}>Rent</button>
              <button onClick={this.handleTypeButton} className={`home-page-button ${type==='sell'?'selected':''}`}>Sell</button>
            </div>

            <span className={`search-selector ${type}`}></span>

            <div className='homepage-search-container'>
              <input
                onChange={this.handleChange}
                className='home-page-search'
                placeholder='Enter a neighborhood, city, address or ZIP code'>
              </input>
              <div className='hp-search-button-container'>
                <input onClick={this.handleSearch} type='submit' className='home-page-search-button' value='Search'/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SplashBody;
