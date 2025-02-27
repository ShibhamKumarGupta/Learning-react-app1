import React from 'react'

function Pagination({pageProps}) {
  return (
    <div>
      <ul className="pagination">
      <li className="disabled">Previous</li>
      <li className="current">1</li>
      {pageProps.map( (element,index) => (
         <li key={index}><a href="#">{element}</a></li>
      ))}
    </ul>
    </div>
  )
}

export default Pagination
