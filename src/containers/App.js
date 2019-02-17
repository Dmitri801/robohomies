import React, { Component } from "react";
import Header from "../components/Header";
import CardList from "../components/CardList";
import Main from "../components/Main";
import ErrorBoundary from "../components/ErrorBoundary";
import { searchFieldChange, getAllRobots } from "../store/actions/robotActions";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getAllRobots();

    this.setState({ loading: false });
  }
  onSearchChange = value => {
    this.props.searchFieldChange(value);
  };
  render() {
    let loading = true;
    let filteredRobots;
    if (this.props.robots.length > 0) {
      filteredRobots = this.props.robots.filter(robot => {
        return robot.name
          .toLowerCase()
          .includes(this.props.searchValue.toLowerCase());
      });
      loading = false;
    }

    return (
      <div className="App">
        <Header
          searchValue={this.props.searchValue}
          onSearchChange={this.onSearchChange}
        />
        {loading ? (
          "Loading.."
        ) : (
          <Main>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Main>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.robots.searchField,
  robots: state.robots.robots
});

export default connect(
  mapStateToProps,
  { searchFieldChange, getAllRobots }
)(App);
