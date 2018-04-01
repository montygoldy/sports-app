import React from "react";
import '../../article.css';

const Body = props => {
  return (
    <div className="articleBody">
      <h1>{props.title}</h1>
      <div className="articleImage" style={{ background: `url('/images/articles/${props.image}')` }}></div>
      <div className="articleText">{props.body}</div>
    </div>
  );
};

export default Body;
