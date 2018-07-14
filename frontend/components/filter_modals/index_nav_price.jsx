import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from '../../actions/filter_actions';
import IndexNavPriceButtons from './index_nav_price_buttons';

class IndexNavPrice extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewing: 'min',
      minPrice: this.props.minPrice,
      maxPrice: this.props.maxPrice
    };

    this.handlePrice = this.handlePrice.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handlePrice(type) {
    return (e) => {
      const numsOnly = e.target.value.replace(/\D/g,'');
      const amt = this.strToInt(numsOnly);
      this.setState({ [type]: amt});
    };
  }

  handleView(type) {
    return () => this.setState({ viewing: type });
  }

  strToInt(x) {
    if (typeof x === 'number') return x;
    return parseInt(x.replace(/,/g, '')) || 0;
  }

  render(){
    const minPrice = this.state.minPrice ? this.state.minPrice : "";
    const maxPrice = this.state.maxPrice ? this.state.maxPrice : "";

    return (
      <div>
        <div className='price-input'>
          <input
            onChange={this.handlePrice('minPrice')}
            onClick={this.handleView('min')}
            type='text' placeholder='Min'
            autoFocus
            value={minPrice}
            />
          &ndash;
          <input
            onChange={this.handlePrice('maxPrice')}
            onClick={this.handleView('max')}
            type='text'
            placeholder='Max'
            value={maxPrice}
            />
        </div>

        <hr/>

        {
          this.state.viewing === 'min' ?
          <IndexNavPriceButtons type='min' updateFilter={updateFilter} /> :
          <IndexNavPriceButtons type='max' minPrice={this.strToInt(minPrice)} updateFilter={updateFilter} />
        }
      </div>
    );
  }
}

const msp = state => {
  return {
    minPrice: state.ui.filters.minPrice,
    maxPrice: state.ui.filters.maxPrice
  };
};

const mdp = dispatch => {
  return {
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(msp, mdp)(IndexNavPrice);
