import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardView from "./views/DashboardView";
import { DevView } from "./views/DevView";
import LoginView from "./views/LoginView";

function App() {
  return (
    <div>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/dashboard">
            <DashboardView />
          </Route>
          <Route exact path="/">
            <LoginView />
=======
          <Route path="/dashboard">
            <DashboardView/>
>>>>>>> sanath
          </Route>
          <Route path="/dev">
            <DevView/>
          </Route>
          <Route path="/">
            <LoginView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
