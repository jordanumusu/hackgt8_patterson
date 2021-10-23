import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView";
import LoginView from "./views/LoginView";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard">
            <DashboardView />
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
