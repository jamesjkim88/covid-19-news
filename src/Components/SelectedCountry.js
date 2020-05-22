import React from 'react'

export const SelectedCountry = (props) => {
  return (
      <div className="categ-title confirmed-case-child">
        <p className="data-copy data"><span className="status-copy">Confirmed</span> - <span className="country-data data">{props.confirmed}</span></p>
        <p className="data-copy data"><span className="status-copy">Recovered</span> - <span className="country-data data">{props.recovered}</span></p>
        <p className="data-copy data"><span className="status-copy">Deaths</span> - <span className="country-data data">{props.deaths}</span></p>
      </div>
  )
}

export default SelectedCountry;
