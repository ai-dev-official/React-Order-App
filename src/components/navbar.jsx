import React, { Component } from "react";
class Navbar extends Component {
  render() {
    const { totalCounters } = this.props;
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge bg-pill bg-secondary">{totalCounters}</span>{" "}
        </a>
      </nav>
    );
  }
}

export default Navbar;
