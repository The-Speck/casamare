import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = { currentPhoto: 0, close: false};
    this.closeShow = this.closeShow.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }

  componentDidMount() {
    if (this.props.home.ownerId === null){
      this.props.fetchHome(this.props.match.params.homeId)
      .then((response) => this.props.fetchOwner(response.home.owner_id));
    } else if (this.props.fetchOwner) {
      this.props.fetchOwner(this.props.home.ownerId);
    }
  }

  priceToString(price) {
    price = Math.floor(price);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  closeShow() {
    this.setState({ close: true });
  }

  handleDelete() {
    this.props.deleteHome(this.props.home.id);
    this.closeShow();
  }

  handleContact() {
    if (this.props.sessionId) {
      const emailTo = this.props.home.ownerEmail;
      location.href = "mailto:"+emailTo;
    } else {
      this.props.openModal('login');
    }
  }

  render () {
    const { address, baths, beds, ownerEmail, sale, rent, price, photos} = this.props.home;
    const type = /^\/[a-z]+/.exec(this.props.location.pathname)[0];

    let editButton = '';
    if (this.props.home && this.props.home.ownerId === this.props.sessionId) {
      const id = this.props.home.id;
      editButton = <Link className='home-header-edit' to={`/sell/${id}/edit`}>EDIT</Link>;
    }

    let deleteButton = '';
    if (this.props.home && this.props.home.ownerId === this.props.sessionId) {
      const id = this.props.home.id;
      deleteButton = <button className='home-header-delete' onClick={this.handleDelete}>DELETE</button>;
    }

    return (
      <div onClick={this.closeShow}
        className='home-background'>
        {this.state.close ? <Redirect exact to={`${type}`}/> : ''}
        <div
          onClick={e => e.stopPropagation()}
          className='home-child'>
          <ul className='home-header'>
            <button className='home-header-save'>
              <span className='save-heart'>&#9825;</span> SAVE
            </button>
            <div>
              {deleteButton}
              {editButton}
              <button
                onClick={this.closeShow}
                className='home-header-close'>X CLOSE
              </button>
            </div>
          </ul>

          <div className='home-address'>
            {address}
          </div>

          <hr/>

          <div className='home-image'>
            {
              <img src={photos[this.state.currentPhoto]}/>
            }
          </div>

          <div className='home-info'>
            <ul>
              <li className='home-info-address'>
                {address}
              </li>
              <li className='home-amenities'>
                {beds} beds &middot; {baths} baths
              </li>
            </ul>
            <ul className='home-price-info'>
              {sale ?
                <li>
                  <span className='home-type'>FOR SALE</span>
                  <span
                    className='home-price'>{`$${this.priceToString(price)}`}
                  </span>
                  <span className='home-mortgage'>EST. MORTGAGE</span>
                  <span className='mortgage-price'>{`$${this.priceToString(price/240)}/mo`}
                  </span>
                </li>
              : ''}
              {rent ?
                <li>
                  <span className='home-type'>FOR RENT</span>
                  <span
                    className='home-price'>
                    {`$${this.priceToString(price/240)}`}
                    <span className='rent-month'>/mo</span>
                  </span>
                </li>
              : ''}
              <li><button onClick={this.handleContact} className='contact-button'>Contact</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
