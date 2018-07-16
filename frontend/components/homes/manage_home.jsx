import React from 'react';
import { Redirect } from 'react-router-dom';

class ManageHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = { close: false };

    this.closeShow = this.closeShow.bind(this);
  }

  closeShow() {
    this.setState({ close: true });
  }

  render() {
    return (
      <div
        onClick={this.closeShow}
        className='home-background'
        >
        {!this.props.sessionId ? <Redirect exact to='/'/> : ''}
        {this.state.close ? <Redirect exact to='/buy'/> : ''}
        <div
          onClick={e => e.stopPropagation()}
          className='home-child'>

          <div className='home-header'>
            <button
              onClick={this.closeShow}
              className='home-header-close'>X CLOSE
            </button>
          </div>

          <form className='manage-home-form'>
            <div className='manage-home-info'>
              <label className='new-home-label'>Address
                <input className='new-home-input' placeholder='Address'></input>
              </label>
              <label className='new-home-label'>City
                <input className='new-home-input' placeholder='City'></input>
              </label>
              <label className='new-home-label'>State
                <input className='new-home-input' placeholder='State'></input>
              </label>
              <label className='new-home-label'>Zip Code
                <input className='new-home-input' placeholder='Zip Code'></input>
              </label>
            </div>
            <div className='manage-home-amenities'>
              <label>Number of Beds
                <select>
                  <option disabled selected>Beds</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6+'>6+</option>
                </select>
              </label>
              <label>Number of Baths
                <select>
                  <option disabled selected>Baths</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6+'>6+</option>
                </select>
              </label>
              <label>Sale / Rent
                <select>
                  <option disabled selected>Sale or rent</option>
                  <option value='1'>Sale</option>
                  <option value='2'>Rent</option>
                  <option value='3'>Both</option>
                </select>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ManageHome;
