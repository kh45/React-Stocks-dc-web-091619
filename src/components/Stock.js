import React from 'react'


export default class Stock extends React.Component {
  
  
  render() {
    
    const {name, price, ticker, type} = this.props.stock
    return (
  
  <div>

    <div className="card" onClick={() => this.props.clickFunction(this.props.stock)} >
      <div className="card-body">
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            `${ticker}: ${price}`
          }</p>
      </div>
    </div>


  </div>

    )
  }
}
