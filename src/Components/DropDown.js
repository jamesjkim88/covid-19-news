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


  constructor(props){
    super(props);
    this.state = {
      countries: [],
      value: ''
    };
    this.elmRef = React.createRef();
  }

  onInputChange(evt) {
    console.log(evt);
  }

  getData = async () => {
    const resp = await axios.get('https://covid19.mathdro.id/api/countries');
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
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
        <Dropdown
      placeholder='Select Country'
      fluid
      search
      selection
      onChange={this.onInputChange}
      options={this.state.countries}
    />
    )
  }
}

export default DropDown;


/*

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