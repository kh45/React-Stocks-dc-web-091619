import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  
  generateStocks = () => this.props.allStocks.map(stock => <Stock key={stock.id} stock={stock} clickFunction={this.props.clickFunction} />)
  
  render() {
    console.log('i rendered')
    return (
      <div>
        <h2>Stocks</h2>
        {this.generateStocks()}
      </div>
    );
  }

}

export default StockContainer;
