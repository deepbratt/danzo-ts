import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Home, Page } from "../screens";
const Routes = () => {
  const isLoggedIn = useSelector(state => state.userReducer.isLoggedin);

  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/" exact component={Home} />
          <Route path="/page" exact component={Page} />
        </MainLayout>
      </Switch>
    </Router>
  );
};
export default Routes;
