import React from "react";

function TopBar({topbarProps,topbarProps2}) {
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            {topbarProps2.map( (element, index) => (
              <li className="menu-text" key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            {topbarProps.map( (element,index) => (
               <li key={index}>
               <a href="#">{element}</a>
             </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
