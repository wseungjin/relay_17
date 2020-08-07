import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { LoginPage } from "./LoginPage.jsx";
import { MainPage } from "./MainPage.jsx";
import { ErrorPage } from "./ErrorPage.jsx";

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
