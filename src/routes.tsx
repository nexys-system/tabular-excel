import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TableGenerator from "./table-generator";
import LinesToRows from "./lines-rows";
import Csv from "./csv";

import Layout from "./layout";
import { basename, sha, github } from "config";

const Default = () => (
  <div>
    <p>Select an option from the menu above</p>

    <p>
      <a href={github.url}>
        <i className="fa fa-code"></i> Source
      </a>{" "}
      available under MIT license.
    </p>

    <p>
      <small>
        <a href={github.sha}>{sha}</a>
      </small>
    </p>
  </div>
);

export default () => (
  <BrowserRouter basename={basename}>
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
