import React from "react";
import "./Tag.scss";

function Tag(props) {
  return (
    <span
      className={props.shape === "default" ? "tag" : "tag tag-capsule"}
      style={props.tagStyle}
    >
      {props.children}
    </span>
  );
}

export default Tag;
