import React from "react";
import InputSpirit from "./features/cocktails/InputSpirit";
import Detail from "./features/cocktails/Detail";
import TheList from "./features/cocktails/TheList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  console.log("Rendering App Component");
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={InputSpirit} />
            <Route path="/list/:id" exact component={TheList} />
            <Route path="/detail/:id" exact component={Detail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
