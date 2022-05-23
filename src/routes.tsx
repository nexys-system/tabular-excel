import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TableGenerator from "./table-generator";
import LinesToRows from "./lines-rows";
import Csv from "./csv";

import Layout from "./layout";

const sha = "";

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

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/tables" element={<TableGenerator />} />
            <Route path="/lines" element={<LinesToRows />} />
            <Route path="/csv" element={<Csv />} />
            <Route element={<Default />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}
