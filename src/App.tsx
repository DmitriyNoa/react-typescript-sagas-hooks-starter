import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Exchange } from "./components/containers/exchange/exchange"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Exchange />
      </Provider>
    </div>
  );
}

export default App;
