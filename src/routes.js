import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TableGenerator from './table-generator';
import LinesToRows from './lines-rows';
import Csv from './csv';

import Layout from './layout';

const Default = () => {
  return (<p>Select an option from the menu above</p>);
}

export default class App extends React.Component {
  render() { 
    return (
      <Router>
       <Layout>
        <Switch>
          <Route exact path="/tables" component={() => <TableGenerator/>}/>
          <Route exact path="/lines" component={() => <LinesToRows/>}/>
          <Route exact path="/csv" component={() => <Csv/>}/>
          <Route component={() => <Default/>}/>
        </Switch>
        </Layout>
      </Router>
    );
  }
}