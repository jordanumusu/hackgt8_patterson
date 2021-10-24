import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView";
import { DevView } from "./views/DevView";
import LoginView from "./views/LoginView";
import TeamView from "./views/TeamView";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/dashboard">
            <DashboardView/>
          </Route>
          <Route path="/dev">
            <DevView/>
          </Route>
          <Route path="/team">
            <TeamView />
          </Route>
          <Route exact path="/">
            <LoginView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
