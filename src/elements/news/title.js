import React, { Fragment } from "react";

const NewsItemTitle = props => (
  <Fragment>
    {" "}
    <p className="title is-4 has-text-weight-normal">
      <a href={props.url} target="_blank">
        {props.title}
      </a>
    </p>
    <span>
      <a target="_blank">
        {" "}
        {props.url !== undefined || props.url !== null
          ? /https:/ //.test(props.url)
            ? props.url.split("/")[2]
            : props.url
          : ""}
      </a>
    </span>
  </Fragment>
);
export { NewsItemTitle };
