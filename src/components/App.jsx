import React from "react";
import UserList from "../components/UserList";
import UserDetails from "../components/UserDetails";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <UserList />
          </Route>
          <Route path="/:id">
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
