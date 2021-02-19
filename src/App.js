import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Inbox from "./component/Inbox";
import DeletedItems from "./component/DeletedItems";
import Spam from "./component/Spam";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { setInboxDataFromJson } from "./actions/inbox";
import { setSpamDataFromJson } from "./actions/spam";

function App() {
  useEffect(() => {
    store.dispatch(setInboxDataFromJson());
    store.dispatch(setSpamDataFromJson());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Inbox} />
            <Route exact path='/spam' component={Spam} />
            <Route exact path='/deleted' component={DeletedItems} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
