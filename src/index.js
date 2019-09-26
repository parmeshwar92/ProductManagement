import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import JsonTable from "./jsonbasedtable";
import AddItem from "./additems";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={JsonTable} />
            <Route exact path="/additems" component={AddItem} />
          </Switch>
        </Router>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
