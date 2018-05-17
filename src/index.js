import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route } from "react-router-dom";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

import reducers from "./reducers";
import PostsIndex from "./components/post_index";

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

class GoodBye extends React.Component {
  render() {
    return <div>GoodBye</div>;
  }
}

class Yes extends React.Component {
  render() {
    return (
      <div className="container">
        <Button bsStyle="primary">Drücken</Button>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        Sacasy
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={GoodBye} />
        <Route path="/" component={Yes} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
