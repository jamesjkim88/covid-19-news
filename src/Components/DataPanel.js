/*

TODO:
  - On input change action and update state to selected country
    - send selected country state to to CountryData to render selected country's data
    - oninputchange -> change state to selected country -> update url to https://covid19.mathdro.id/api/countries/this.state.selectedCountry -> make api call
      -> collect and render data
  - DropDown HTML or CSS LIB ?!?!??!?!? 
  - further changes made if needed

*/


import React, { Component } from 'react'
import DropDown from './DropDown';
import Container from './Container';
import WorldWide from './WorldWide';
import CountryData from './CountryData';


export class DataPanel extends Component {
  state = {};

  render() {
    return (
      <Container className="four wide column">
      <WorldWide covid19Data={this.props.covid19Data}/>
      <DropDown country={this.props.country}/>
      <CountryData covid19CountryData={this.props.covid19CountryData}/>
    </Container>
    )
  }
}

export default DataPanel
