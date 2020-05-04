/*

TODO:
  - Break down the jsx into components
  - each different cases will be a component
    - grand-parent, parent, and grand-child
  Continue using 'dummy bullshit' data till web scraping is working
  
*/


import React from 'react';

const DataPanel = (props) => {
  return(
    <div className="tc ma2 pa3 data-panel fl w-20">
      <div className="cases">
        <h5>total cases component</h5>
        <div className="categ-title confirmed-case-child">Total Cases<br/><span className="data">{props.data}</span></div>
      </div>
      <div className="cases mt5">
        <h5>cases by country component</h5>
        <div className="categ-title confirmed-case-country-child">
          <span className="data">345345</span> Country 1<br/><span className="data">3462342</span>Country 2<br/><span className="data">5648946</span> Country 3
        </div>
      <div className="categ-title death-case-total-country-child">
        <span className="data">345345</span> Country 1<br/> <span className="data">3462342</span> Country 2<br/><span className="data">5648946</span> Country 3
        </div>
      </div>
      <div className="death-rate-total cases mt5">
        <h5>total death rate component</h5>
        <div className="categ-title death-case-total-child"><span className="data">345345</span> death</div>
      </div>
      <div className="cases mt5">
        <h5>total death rate by countries</h5>
        <span className="data">345345</span> Country 1<br/> <span className="data">3462342</span> Country 2<br/><span className="data">5648946</span> Country 3
      </div>
    </div>
  )
}

export default DataPanel;