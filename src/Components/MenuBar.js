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
        <form className="pa4 black-80">
        <div className="measure">
          <input id="name" placeholder="Search Videos" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" value={this.state.value} onChange={this.onInputChange} />
        </div>
      </form>
      </div>
    )
  }
}

export default MenuBar

