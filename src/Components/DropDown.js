/*

  TODO:
    - Get semantic ui dropdown to work
    - for now use regular html option and select for now
    - convert to functional component and code out like VideoList and Video

*/

import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';
import axios from 'axios';

class DropDown extends Component {
    state = {};

  listCountry = this.props.country.map((elm, i) => {
    return (
      <option key={i} id={elm.name} value={elm.name}>{elm.name}</option>
    )
  });

  onInputChange = async () => {
    const selectTag = document.querySelector('.ui .dropdown');
    const data = await axios.get(`https://covid19.mathdro.id/api/countries/${selectTag.value}`);
    this.props.onChangeVal(data.data, selectTag.value);
  }

  render() {
    return (
      <select ref={this.elmRef} className="ui dropdown" onChange={this.onInputChange}>
        {this.listCountry}
      </select>
    )
  }
}

export default DropDown;


/*

    let arr = [];

    resp.data.countries.map((elm, i) => {
      arr.push({
        key: i,
        text: elm.name
      });
    });

    this.setState({
      countries: arr
    });
          <Dropdown
      placeholder='Select Country'
      fluid
      search
      selection
      onChange={this.onInputChange}
      options={this.state.countries}
    />

    resp.data.data.map((elm) => {
      return arr.push({
        key: elm.code.toLowerCase(),
        value: elm.code.toLowerCase(),
        flag: elm.code.toLowerCase(),
        text: elm.name
      });
    });
    this.setState({
      countries: arr
    })

*/