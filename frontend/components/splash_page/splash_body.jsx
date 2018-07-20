import React from 'react';
import Footer from '../footer';
import { Redirect } from 'react-router-dom';

class SplashBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = { type: 'buy', search: '', submit: false, loggedIn: this.props.loggedIn, currentImage: Math.floor(Math.random()*3.99)};

    this.handleTypeButton = this.handleTypeButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const splashVideo = document.getElementById("splashVid");
    splashVideo.play();
    this.handleImageChange();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.loggedIn !== this.props.loggedIn) {
      this.setState({ loggedIn: this.props.loggedIn });
    }
  }

  handleTypeButton(type){
    return () => {
      this.setState({ type });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleSearch();
  }

  handleSearch(){
    if (this.state.loggedIn || this.state.type !== 'sell') {
      this.props.updateFilter(this.type, true);
      this.props.updateFilter('area', this.state.search);
      this.setState({ submit: true });
    } else {
      this.props.openModal('login');
    }
  }

  handleChange(e){
    this.setState({ search: e.target.value});
  }

  handleImageChange(){
    window.setInterval(() => {
      this.setState({ currentImage: (this.state.currentImage + 1)%3 });
    }, 5000);
  }

  images() {
    let imageLinks = window.splashLink.split(',');
    return(
      <video autoPlay muted loop id="splashVid">
        <source src={imageLinks[this.state.currentImage]} type="video/mp4"/>
      </video>
    );
  }

  render () {
    const { selected, type, submit } = this.state;
    if (submit) return <Redirect to={`/${this.state.type}`}/>;


    return (
      <div>
        <div className='splash-body'>
          {this.images()}

          <div className='home-page-container'>
            <div className='home-page-buttons'>
              <button onClick={this.handleTypeButton('buy')} className={`home-page-button ${type==='buy'?'selected':''}`}>Buy</button>
              <button onClick={this.handleTypeButton('rent')} className={`home-page-button ${type==='rent'?'selected':''}`}>Rent</button>
              <button onClick={this.handleTypeButton('sell')} className={`home-page-button ${type==='sell'?'selected':''}`}>Sell</button>
            </div>

            <span className={`search-selector ${type}`}></span>

            <div className='homepage-search-container'>
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleChange}
                  className='home-page-search'
                  placeholder='Enter a neighborhood, city, address or ZIP code'>
                </input>
              </form>
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
