import React from "react";
import InputSpirit from "./Components/InputSpirit.js";
import Detail from "./Components/Detail.js";
import TheList from "./Components/TheList.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/redux/drinkStore";

const App = () => {
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
