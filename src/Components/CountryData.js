import React from 'react'
import Header from './Header'
import SelectedCountry from './SelectedCountry'

export const CountryData = (props) => {


  return (
    <div className="cases mt25 selected-country">
      <Header header={props.countryName} />
      <SelectedCountry confirmed={props.confirmed} deaths={props.death} recovered={props.recovery}/>
    </div>
  )
}

export default CountryData;