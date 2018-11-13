import React, { Fragment } from "react";
import Nav from "../components/Nav";
import { LogIn } from "../elements/user";

export default class User extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav isLoginPage={true} /> <LogIn />
      </Fragment>
    );
  }
}
