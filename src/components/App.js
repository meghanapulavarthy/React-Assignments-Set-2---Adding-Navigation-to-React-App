import React, { Component } from "react";
import "../styles/App.css";
import Home from "../components/Home.js";
import About from "../components/About.js";
import LocationDisplay from "../components/LocationDisplay.js";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import NoMatch from "../components/NoMatch";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
        <LocationDisplay />
      </div>
    );
  }
}

export default App;
export { LocationDisplay, Home, About, NoMatch };
