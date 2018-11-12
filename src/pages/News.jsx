import React, { Component, Fragment } from "react";
import axios from "axios";
import { inject, observer } from "mobx-react";
import { Motion, spring } from "react-motion";
import { PageContainer } from "../elements/common";
import Nav from "../components/Nav";
import NewsItem from "../components/NewsItem";

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

  newsContent = data => {
    const content = <NewsItem data={data} />;
    return this.renderContent(content);
  };

  render() {
    const { renderContent, newsContent } = this;
    const NewsStore = this.props.NewsStore;
    if (NewsStore.loadDataError) {
      return renderContent("Sorry... very embarassing");
    }
    if (!NewsStore.newsData || NewsStore.newsData.length === 0) {
      return renderContent("Loading...");
    }
    return newsContent(NewsStore.newsData);
  }
}
