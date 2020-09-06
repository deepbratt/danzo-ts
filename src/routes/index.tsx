import React from "react";
import { useSelector } from "react-redux";
import { NativeRouter, Route } from "react-router-native";
import MainLayout from "../layout/MainLayout";
import { Home, Page } from "../screens";
const Routes = () => {
  const isLoggedIn = useSelector(state => state.userReducer.isLoggedin);

  return (
    <NativeRouter>
      <MainLayout>
        <Route path="/" exact component={Home} />
        <Route path="/page" component={Page} />
      </MainLayout>
    </NativeRouter>
  );
};
export default Routes;
