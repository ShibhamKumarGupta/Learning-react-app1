import React from "react";

function SideBars({ barProps1, barProps2 }) {
  return (
    <div>
      <div className="sidebar">
        {barProps1.map((element, index) => (
          <div key={index}>
            <h4>{element}</h4>
            <ul>
              {barProps2.map((element, index) => (
                <li key={index}>
                  <a href="#">{element}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBars;
