import Layout from './layout';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "./assets/sass/App.scss";

import history from './utils/History';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Layout} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;