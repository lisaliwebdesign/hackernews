import React, { Fragment } from "react";
import { inject, observer } from "mobx-react";
import InfiniteScroll from "react-infinite-scroller";
import { PageContainer } from "../elements/common";
import Nav from "../components/Nav";
import NewsItem from "../components/NewsItem";

@inject("NewsStore")
@observer
export default class News extends React.Component {
  //Page onload
  constructor(props) {
    super(props);
    this.state = {
      hasMoreItems: true,
      threshold: 250,
      pathId: ""
    };
  }
  componentDidMount() {
    //Get path from router
    const path = this.props.location.pathname.split("/")[2];
    //Set load path and load item = 30
    this.props.NewsStore.loadData(path, 30);
    this.setState({
      pathId: path
    });
  }
  componentWillReceiveProps(nextProps) {
    //Update path from props
    const path = nextProps.location.pathname.split("/")[2];
    //Update load path and load item = 30
    this.props.NewsStore.loadData(path, 30);
    this.setState({
      pathId: path
    });
    this.loadItems.bind(this);
  }

  //InfiniteScroll loading
  loadItems(page) {
    var self = this;
    //Get stored data
    const NewsStore = this.props.NewsStore;
    const newsArrarySet = NewsStore.newsDataGroupArray;
    const newsArrarySetCount = NewsStore.newsDataGroupArrayCount;
    //Load more page when the request is less than the tatal nunber of data set
    if (page < newsArrarySetCount + 1) {
      NewsStore.loadItems(newsArrarySet[page]);
    } else {
      self.setState({
        hasMoreItems: false
      });
    }
  }

  renderContent = text => (
    <Fragment>
      <Nav selectedId={this.state.pathId} /> <PageContainer content={text} />
    </Fragment>
  );

  newsContent = data => {
    const content = <NewsItem data={data} type={this.state.pathId} />;
    return this.renderContent(content);
  };

  render() {
    const { renderContent, newsContent } = this;
    const NewsStore = this.props.NewsStore;
    if (NewsStore.loadDataError) {
      return renderContent("Sorry... very embarassing");
    }
    if (!NewsStore.newsItemsData || NewsStore.newsItemsData.length === 0) {
      return renderContent("Loading...");
    }
    if (NewsStore.newsItemsData) {
      return (
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadItems.bind(this)}
          hasMore={this.state.hasMoreItems}
          threshold={this.state.threshold}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {newsContent(NewsStore.newsItemsData)}
        </InfiniteScroll>
      );
    }
  }
}
