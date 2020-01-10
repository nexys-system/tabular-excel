import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import * as History from 'history';

import TableGenerator from './table-generator';
import LinesToRows from './lines-rows';
import Csv from './csv';
import SrtToVtt from './srt-vtt/index';


import Layout from './layout';

const Default = () => {
  return (<p>Select an option from the menu above</p>);
}

const history = History.createBrowserHistory({
  basename: process.env.PUBLIC_URL || '',
});

export default class App extends React.Component {
  render() { 
    return (
      <Router history={history}>
       <Layout>
        <Switch>
          <Route exact path="/tables" component={() => <TableGenerator/>}/>
          <Route exact path="/lines" component={() => <LinesToRows/>}/>
          <Route exact path="/csv" component={() => <Csv/>}/>
          <Route exact path="/srtToVtt" component={() => <SrtToVtt/>}/>
          <Route component={() => <Default/>}/>
        </Switch>
        </Layout>
      </Router>
    );
  }
}