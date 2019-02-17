import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header" style={styles.header}>
        <div>
          <h1 style={styles.h1}>Robo-Homies</h1>
        </div>
        <div>
          <input
            className="searchInput"
            placeholder="Search.."
            style={styles.input}
            value={this.props.searchValue}
            onChange={e => this.props.onSearchChange(e.target.value)}
            type="text"
          />
        </div>
      </header>
    );
  }
}

const styles = {
  header: {
    position: "relative",
    height: "250px",
    width: "100%",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  h1: {
    fontFamily: "'Major Mono Display', monospace",
    fontSize: "4em",

    color: "#fff"
  },

  input: {
    padding: "15px",
    background: "#333",
    border: "none",
    width: "180px",
    color: "#fff",
    fontSize: "1.2em",
    borderRadius: "5px",
    letterSpacing: "2px",
    fontWeight: "900"
  }
};

export default Header;
