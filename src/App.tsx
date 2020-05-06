import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Pocket } from "./components/common/pocket/Pocket";
import {IPocket} from "./lib/interfaces/Pocket";
const testPocket: IPocket = {
    balance: 222.222,
    id: 1111,
    currency: {
        displayName: "Euro",
        code: "EUR"
    }
}
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
            <Pocket pocket={testPocket} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
