import React from "react";

const NewsItemHideIcon = props => (
  <div
    className={
      props.type === "askstories" ||
      props.type === "showstories" ||
      props.type === "jobstories"
        ? "display-none"
        : "bottom"
    }
  >
    <span className="item-right">
      <a title="Hide" target="_blank">
        <i title="Hide" className="far fa-eye-slash" />
      </a>
    </span>
  </div>
);
export { NewsItemHideIcon };
