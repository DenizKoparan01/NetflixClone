import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./Landing";
import login from "./login";
import singIn from "./singIn";
import Free from "./Free";
import notFound from "./notFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Free} />
          <Route path="/login" component={login} />
          <Route path="/Landing" component={Landing} />
          <Route path="/singIn" component={singIn} />
          <Route path="/notFound" component={notFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
