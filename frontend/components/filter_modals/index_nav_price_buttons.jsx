import React from 'react';

class IndexNavPriceButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  findRange(type){
    let prices = [];
    if (type === 'min') {
      prices = ['$0+', '$50,000+', '$75,000+', '$100,000+', '$150,000+', '$200,000+', '$250,000+', '$300,000+', '$400,000+', '$500,000+'];
    } else {
      if (this.props.minPrice !== null){
        const min = this.props.minPrice;
        for(let i = 25000; i < 25000*10; i += 25000) {
          prices.push(min+i);
        }
        prices = prices.map(num => `$${this.numberWithCommas(num)}`);
        prices.push('Any Price');
      } else {
        prices = ['$100,000', '$200,000', '$300,000', '$400,000', '$500,000', '$600,000', '$700,000', '$800,000', '$900,000', 'Any Price'];
      }

    }
    return prices.map((amt, idx) => {
      return <li key={idx}><button>{amt}</button></li>;
      });
  }

  numberWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  strToInt(x) {
    return parseInt(x.replace(/,/g, ''));
  }

  render(){
    const range = this.findRange(this.props.type);

    return (
      <ul className={`price-button ${this.props.type}`}>
        {range}
      </ul>
    );
  }
}

export default IndexNavPriceButtons;
