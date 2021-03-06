import React from "react";
import "../article.css";

const PostData = props => {
  return (
    <div className="articlePostData">
      <div>
        Date:
        <span>{props.data.date}</span>
      </div>
      <div>
        Author:
        <span>{props.data.author}</span>
      </div>
    </div>
  );
};

export default PostData;
