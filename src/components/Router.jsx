import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import News from "../pages/News";
import User from "../pages/User";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/news/:news" exact component={News} />
          <Route path="/user/:user" exact component={User} />
        </Switch>
      </BrowserRouter>
    );
  }
}
