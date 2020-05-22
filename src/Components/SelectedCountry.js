import React, { Component } from 'react'

class SelectedCountry extends Component {
  state = {};
  
  render() {
    return (
      <div class="categ-title confirmed-case-child">
        <p className="data-copy data"><span className="status-copy">Confirmed</span> - <span className="country-data data">{this.props.covid19CountryData.data.confirmed.value}</span></p>
        <p className="data-copy data"><span className="status-copy">Recovered</span> - <span className="country-data data">{this.props.covid19CountryData.data.recovered.value}</span></p>
        <p className="data-copy data"><span className="status-copy">Death</span> - <span className="country-data data">{this.props.covid19CountryData.data.deaths.value}</span></p>
      </div>
    )
  }
}

export default SelectedCountry
