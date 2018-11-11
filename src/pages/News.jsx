import React, { Component, Fragment } from "react";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { Motion, spring } from "react-motion";
import { PageContainer } from "../elements/common";
import Nav from "../components/Nav";

@inject("NewsStore")
@observer
export default class News extends React.Component {
  //Page onload
  componentDidMount() {
    this.props.NewsStore.loadData();
  }

  renderContent = text => (
    <Fragment>
      <Nav /> <PageContainer content={text} />
    </Fragment>
  );

  render() {
    const NewsStore = this.props.NewsStore;
    if (NewsStore.loadDataError) {
      return this.renderContent("Sorry... very embarassing");
    }
    if (!NewsStore.newsData) {
      return this.renderContent("Loading...");
    }
    return this.renderContent("there is data...");
  }
}
