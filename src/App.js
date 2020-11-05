import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Input from "./Input";
import Page from "./Page";
import Review from "./Review";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1 className="text-center border "> Let's Build Rating page</h1>
          {/* <Input /> */}
          <Switch>
            <Route exact path="/input" component={Input} />
            <Route exact path="/rating_page" component={Page} />
            <Route exact path="/review" component={Review} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
