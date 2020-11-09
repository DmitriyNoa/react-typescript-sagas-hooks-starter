import React from "react";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { store } from "./store";
import { Main } from "./components/containers/main/main"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route path="/">
                      <Main />
                  </Route>
                  <Route path="/character/:id">
                      <Main />
                  </Route>
              </Switch>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
