import React from 'react'
import Header from './Header'
import SelectedCountry from './SelectedCountry'

export const CountryData = (props) => {
  

  return (
    <div className="cases mt25 selected-country">
      <Header header="USA *STATIC NAME NEEDS TO BE DYNAMIC FROM DATA*" />
      <SelectedCountry covid19CountryData={props.covid19CountryData}/>
    </div>
  )
}

export default CountryData;