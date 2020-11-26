import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
