import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      stocks: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => this.allStocks(stocks))
  }

  allStocks = (array) => {
    this.setState({
      stocks: array
    })
  }

  sortBy = (event) => {
    if (event.target.value === "Price") {
      this.setState({
        stocks: this.state.stocks.sort((a,b) => a.price > b.price ? 1:-1)
      })
      // console.log(this.filterByType().sort((a,b) => a.price > b.price ? 1:-1))
    } else {
      this.setState({
        stocks: this.state.stocks.sort((a,b) => a.name > b.name ? 1:-1)
      })
      // console.log(this.filterByType().sort((a,b) => a.name > b.name ? 1:-1))
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer allStocks={this.state.stocks} sortBy={this.sortBy} />
      </div>
    );
  }
}

export default App;
