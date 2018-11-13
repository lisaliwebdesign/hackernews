import React from "react";
import { NavBar } from "../elements/nav";
import { navData } from "../stores/NavStore";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.isLoginPage
        ? "user-log-in"
        : this.props.selectedId
        ? this.props.selectedId
        : "topstories",
      toggle: false,
      isLogInNav: false
    };
  }
  render() {
    const onClick = elementId => {
      this.setState({
        active: elementId,
        isLogInNav: elementId === "user-log-in" ? true : false
      });
    };
    const toggle = () => {
      this.setState({ toggle: !this.state.toggle });
    };
    return (
      <NavBar
        content={navData}
        onClick={onClick}
        active={this.state.active}
        toggleClick={toggle}
        toggle={this.state.toggle}
        isLogInNav={this.props.isLoginPage ? true : this.state.isLogInNav}
      />
    );
  }
}
