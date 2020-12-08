import React, { Component } from "react";
import "../styles/App.css";
import Home from "../components/Home.js";
import About from "../components/About.js";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation
} from "react-router-dom";
import NoMatch from "../components/NoMatch";
import LocationDisplay from "../components/LocationDisplay";

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
      </div>
    );
  }
}

export default App;
