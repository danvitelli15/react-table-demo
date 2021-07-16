import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FeatureExamples from "./pages/featureExamples/FeatureExamples";
import QuickStart from "./pages/QuickStart";

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/featureExamples">
          <FeatureExamples />
        </Route>
        <Route path="/">
          <QuickStart />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
