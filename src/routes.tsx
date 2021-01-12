import React from "react";

import { Router, Switch, Route } from "react-router-dom";
import * as History from "history";

import TableGenerator from "./table-generator";
import LinesToRows from "./lines-rows";
import Csv from "./csv";
import SrtToVtt from "./srt-vtt/index";

import Layout from "./layout";

const sha = process.env.REACT_APP_GIT_SHA || "git_sha_undefined";

const Default = () => (
  <div>
    <p>Select an option from the menu above</p>

    <p>
      <a href="https://github.com/Nexysweb/tabular-excel">
        <i className="fa fa-code"></i> Source
      </a>{" "}
      available under MIT license.
    </p>

    <p>
      <small>
        <a href={"https://github.com/Nexysweb/tabular-excel/commit/" + sha}>
          {sha}
        </a>
      </small>
    </p>
  </div>
);

const history = History.createBrowserHistory({
  basename: process.env.PUBLIC_URL || "",
});

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/tables" component={() => <TableGenerator />} />
            <Route exact path="/lines" component={() => <LinesToRows />} />
            <Route exact path="/csv" component={() => <Csv />} />
            <Route exact path="/srtToVtt" component={() => <SrtToVtt />} />
            <Route component={() => <Default />} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}
