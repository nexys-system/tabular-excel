import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import TableGenerator from "./table-generator";
import LinesToRows from "./lines-rows";
import Csv from "./csv";

import Layout from "./layout";
import { basename } from "./config";

import Home from "./home";

export default () => (
  <BrowserRouter basename={basename}>
    <Layout>
      <Routes>
        <Route path="/tables" element={<TableGenerator />} />
        <Route path="/lines" element={<LinesToRows />} />
        <Route path="/csv" element={<Csv />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
