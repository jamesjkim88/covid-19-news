/*

This is a container that will hold MenuLinks list items

*/

import React, { Component } from 'react'

export class MenuBar extends Component {
  state = {
    value: ''
  }

aaf

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value})
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  }

  

  render() {
    console.log(this.state.value);
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input className="pa2 ba" type="text" placeholder="Search" value={this.state.value} onChange={this.onInputChange}/>
        </form>
      </div>
    )
  }
}

export default MenuBar

