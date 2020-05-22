import React from 'react'
import Header from './Header'

export const WorldWide = (props) => {
  return (
      <div className="cases world-wide">
        <Header header="World Wide"/>
        <div className="categ-title confirmed-case-child">
          <p className="total-data data"><span className="status-copy">Confirmed</span> - <span className="country-data data">{props.covid19Data.confirmed.value}</span></p>
          <p className="total-data data"><span className="status-copy">Recovered</span> - <span className="country-data data">{props.covid19Data.recovered.value}</span></p>
          <p className="total-data data"><span className="status-copy">Deaths</span> - <span className="country-data data">{props.covid19Data.deaths.value}</span></p>
        </div>
      </div>
  )
}

export default WorldWide;