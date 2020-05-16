/*

TODO:
  - Break down the jsx into components
  - each different cases will be a component
    - grand-parent, parent, and grand-child
  
*/


import React from 'react';

const DataPanel = (props) => {
  return(
    <div className="tc ma2 pa3 data-panel fl w-20 four wide column">
      <div>
      <div className="cases">
        <h1>World Wide</h1>
        <div className="categ-title confirmed-case-child">
          <p className="total-data data"><span className="status-copy">Confirmed</span> - <span className="country-data data">{props.covid19Data.confirmed.value}</span></p>
          <p className="total-data data"><span className="status-copy">Recovered</span> - <span className="country-data data">{props.covid19Data.recovered.value}</span></p>
          <p className="total-data data"><span className="status-copy">Deaths</span> - <span className="country-data data">{props.covid19Data.deaths.value}</span></p>
        </div>
      </div>
      <div className="cases mt5">
        <h1>USA</h1>
        <p className="data-copy data"><span className="status-copy">Confirmed</span> - <span className="country-data data">{props.covid19CountryData.data.confirmed.value}</span></p>
        <p className="data-copy data"><span className="status-copy">Recovered</span> - <span className="country-data data">{props.covid19CountryData.data.recovered.value}</span></p>
        <p className="data-copy data"><span className="status-copy">Death</span> - <span className="country-data data">{props.covid19CountryData.data.deaths.value}</span></p>
      </div>
      </div>
    </div>
  )
}

export default DataPanel;