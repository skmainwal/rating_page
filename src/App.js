import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Input from "./Input";
import Page from "./Page";
import Review from "./review_comp/Review";

import { Provider } from "react-redux";
import store from "./store/store";
import MoreReview from "./review_comp/MoreReview";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1 className=" title text-center border p-3">Search Rating...</h1>
          <Link to="/input">
            <button className="ml-5 p-2 btn btn-primary   border">Home</button>
          </Link>

          <Switch>
            <Route exact path="/input" component={Input} />
            <Route exact path="/rating_page" component={Page} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/morereview" component={MoreReview} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
