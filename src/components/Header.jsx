import React from 'react'

function Header({headingProps}) {
  return (
    <div>
      <div className="header">
    <h1>{headingProps.head}</h1>
    </div>
    </div>
  )
}

export default Header
