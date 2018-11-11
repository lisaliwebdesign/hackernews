import React, { Component } from "react";

import { Provider } from "mobx-react";

import Router from "./components/Router";

import NewsStore from "./stores/NewsStore";

export default class App extends Component {
  render() {
    return (
      <Provider NewsStore={NewsStore}>
        <Router />
      </Provider>
    );
  }
}
