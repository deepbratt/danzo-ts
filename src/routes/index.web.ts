import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainLayout from "./src/layout/MainLayout";
import { Home } from "./src/screens";
const Routes = () => {
  const isLoggedIn = useSelector(state => state.userReducer.isLoggedin);

  return (
    <Router>
      <Switch>
        <MainLayout>
          <Route path="/" exact component={Home} />
        </MainLayout>
      </Switch>
    </Router>
  );
};
export default Routes;
