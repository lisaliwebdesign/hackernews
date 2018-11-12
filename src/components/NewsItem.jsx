import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { NewsItemContainer } from "../elements/news";

export default class NewsItem extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(Object)
  };

  render() {
    return <NewsItemContainer content={this.props.data} />;
  }
}
