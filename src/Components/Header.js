import React from 'react'

const Header = (props) => {
  if(!props.subhead){
    return(
      <div className="top-header">
        <h1 className="content header">{props.header}</h1>
      </div>
    )
  }
  
  return (
    <div className="top-header">
      <h1 className="content header">{props.header}</h1>
      <h3 className="content subhead">{props.subhead}</h3>
    </div>
  )
}

export default Header;
