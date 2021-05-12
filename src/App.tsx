/* istanbul ignore file */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DemoSection } from "./containers/Demo/demo";

const Root = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DemoSection} exact />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default Root;
