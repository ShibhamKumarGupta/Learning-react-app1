import React from "react";

function Blogs({ blogProps }) {
  return (
    <div>
      <div className="blog-posts">
        {blogProps.map( (element, index) => (
          <div className="blog-post" key={index}>
          <h3>
            {element.blogtitle}<small>{element.blogdate}</small>
          </h3>
          <img
            src={element.image}
            alt={element.altimage}
          />
          <p>
           {element.desc}
          </p>
          <div className="callout">
            <ul className="menu simple">
              <li>
                <a href="#">{element.author}</a>
              </li>
              <li>
                <a href="#">{element.comments}</a>
              </li>
            </ul>
          </div>
        </div>
        ))}
        

      
      </div>
    </div>
  );
}

export default Blogs;
