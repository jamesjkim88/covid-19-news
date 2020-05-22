/*

This is a container that will hold MenuLinks list items

*/

import React, { Component } from 'react'

export class MenuBar extends Component {
  state = {
    value: ''
  }

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
<div className="ui form marbot25">
<div className="field six wide center">
  <form onSubmit={this.onFormSubmit}>
  <label>Videos</label>
  <input id="name" placeholder="Search Videos" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value={this.state.value} onChange={this.onInputChange} />
  </form>
</div>
</div>
    )
  }
}

export default MenuBar

