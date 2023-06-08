import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import EmployeesPage from "./components/EmployeesPage";
import Layout from "./Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/employees" exact component={EmployeesPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
