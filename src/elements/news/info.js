import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const NewsItemInfo = props => (
  <span>
    <i className="far fa-heart" /> {props.score + " by "}{" "}
    <Link to="/user/login">{props.by}</Link>
    <span>
      {" "}
      <Moment fromNow ago unix>
        {props.time}
      </Moment>{" "}
      ago
    </span>
  </span>
);
export { NewsItemInfo };
