import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./views/LoginPage";
import MainPage from "./views/MainPage";
import ErrorPage from "./views/ErrorPage";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/MainPage" exact component={MainPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
