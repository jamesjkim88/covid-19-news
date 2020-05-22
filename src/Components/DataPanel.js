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
  state = {
    selectedCountry: 'USA',
    confirmed: this.props.defaultCountry.confirmed.value,
    deaths: this.props.defaultCountry.deaths.value,
    recovered: this.props.defaultCountry.recovered.value
  };

  onChangeVal = (data, country) => {
    this.setState({
      selectedCountry: country,
      confirmed: data.confirmed.value,
      deaths: data.deaths.value,
      recovered: data.recovered.value
    });
  }

  render() {
    console.log(this.props.defaultCountry);
    return (
    <Container className="four wide column">
      <WorldWide covid19Data={this.props.covid19Data}/>
      <DropDown country={this.props.country} onChangeVal={this.onChangeVal}/>
      <CountryData confirmed={this.state.confirmed} death={this.state.deaths} recovery={this.state.recovered} countryName={this.state.selectedCountry} defaultCountry={this.props.defaultCountry}/>
    </Container>
    )
  }
}

export default DataPanel
