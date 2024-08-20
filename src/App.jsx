import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0
  }
  increaseCount = () => {
    const {count} = this.state
    this.setState ({
      count: count + 1
     })
  }
  decreaseCount = () => {
    const {count} = this.state
    this.setState({
      count: count - 1
    }) 
  }
  render() {
    const {count} = this.state
    return (
      <div className='container d-flex align-items-center gap-4'>
        <button className='btn btn-info' onClick={this.increaseCount}>+</button>
        <h2>{count}</h2>
        <button className='btn btn-danger' onClick={this.decreaseCount}>-</button>
      </div>
    )
  }
}
