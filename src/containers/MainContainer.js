import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      portfolio: [],
      filter: ""
    }
  }


  addStockToFolio = (stock) => {
    if (!this.state.portfolio.includes(stock)) {
      console.log(stock)
      this.setState({portfolio: [...this.state.portfolio, stock]})
    }  
  }

  sellStock = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(myStock => myStock.id !== stock.id)
    })
  }

  setFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  // sortBy = (event) => {
  //   if (event.target.value === "Price") {
  //     this.setState({
  //       stocks: this.state.stocks.sort((a,b) => a.price > b.price > 1:-1)
  //     })
  //     // console.log(this.filterByType().sort((a,b) => a.price > b.price ? 1:-1))
  //   } else {
  //     this.setState({
  //       stocks: this.state.stocks.sort((a,b) => a.name > b.name > 1:-1)
  //     })
  //     // console.log(this.filterByType().sort((a,b) => a.name > b.name ? 1:-1))
  //   }
  // }
  
  filterByType = () => this.props.allStocks.filter(stock => stock.type.includes(this.state.filter))


  render() {
    return (
      <div>
        <SearchBar setFilter={this.setFilter} sortBy={this.props.sortBy} />

          <div className="row">
            <div className="col-8">

              <StockContainer allStocks={this.filterByType()} filterByType={this.filterByType} clickFunction={this.addStockToFolio} />

            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.portfolio} clickFunction={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
