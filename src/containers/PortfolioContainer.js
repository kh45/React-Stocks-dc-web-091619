import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  generatePortfolio = () => this.props.myStocks.map(stock => <Stock key={stock.id} stock={stock} clickFunction={this.props.clickFunction} />)
  
  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.generatePortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
