import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Administrator from "./components/Administrator";
import Project from "./components/Project";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" >
            <Project/>
          </Route>
          <Route exact path="/administrator" component={Administrator} />
        </Switch>
      </main>
    </Router>

    // <div>
    //   <Navbar />
    //   <Home />
    //   <Project />
    //   <Administrator />
    // </div>
  );
};

export default App;
