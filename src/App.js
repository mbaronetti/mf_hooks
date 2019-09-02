import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="mf--app">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
