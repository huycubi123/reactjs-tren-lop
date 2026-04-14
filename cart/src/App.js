import React, { Component } from 'react'
import CartHeaderComponent from './components/CartHeaderComponent'
import CartBodyComponent from './components/CartBodyComponent'
import CartInfoComponent from './components/CartInfoComponent'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: [
        { id: 1, name: 'Iphone 12 Pro Max', price: 1000, quantity: 1 },
        { id: 2, name: 'Samsung Galaxy S21 Ultra', price: 1200, quantity: 2 },
        { id: 3, name: 'Xiaomi Mi 11 Ultra', price: 900, quantity: 1 },
      ]
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <CartHeaderComponent />
            <CartBodyComponent carts={this.state.carts} />
          </div>
        </div>
        <CartInfoComponent />
      </div>
    )
  }
}