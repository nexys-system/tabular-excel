import React from 'react';


import { toXlsx } from './tabular-xlsx'

// var text = 'Some data I want to export';
//var data = new Blob([text], {type: 'text/plain'});
//console.log(typeof data)
// example for CSV
//console.log(b)
//
//const b = new Blob(['col1,col2,col3'], {type: 'text/csv'});
//const b = new Blob(csv, {type: 'text/csv'});
//
import users from './data/users.json';

const colorByStatus = status => {
  if (status === 'ok') return 'green';
  if (status === 'inactive') return 'red';
  if (status === 'pending') return 'orange';

  return null
}

const randomInteger = () => Math.ceil(1000*Math.random());

const bitToBlob = (x, type) => new Blob([x], {type});

const formatJsArray = (js) => {
  if (!Array.isArray(js) || js.length === 0) {
    return [];
  }

  return '[\n\t' + js.map(row => {
    return JSON.stringify(row)
  }).reduce((a, b) => a + ',\n\t' + b) + '\n]';
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { jsContent: []};
  }

  onClick = () => {
    const { jsContent } = this.state;

    const workbookName = 'Users'

    toXlsx(jsContent, workbookName).then(x => {
      const b = bitToBlob(x, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      const url = window.URL.createObjectURL(b);

      window.location = url;
    });
  }

  handleChange = (a) => {
    try {
      const jsContent = JSON.parse(a.target.value);

      this.setState({jsContent});
    } catch (err) { }
  }

  loadUsersSimple = () => {
    const n = 10;
    const jsContent = users.splice(0, n).map(user => {
      return [user.firstName, user.lastName];
    });

    const headers = ['first name', 'last name'].map(x => {
      return {
        content: x,
        style: {font: {bold: true}}
      }
    });

    jsContent.unshift(headers);

    this.setState({jsContent});
  }

  loadUsersAdvanced = () => {
    const styleBoldAndBlue = {font: {color: 'blue', bold: true}};

    const jsContent = users.map(user => {
      const style = {font: {color: colorByStatus(user.status)}};
      const status = {content: user.status, style: style};
      const age = {content: randomInteger(), style: styleBoldAndBlue};
      return [user.firstName, user.lastName, status, age];
    });

    this.setState({jsContent});
  }

  renderNav = () => {
    const navs = [
      {id:1, name: 'user simple', fx: this.loadUsersSimple},
      {id:2, name: 'user advanced', fx: this.loadUsersAdvanced}
    ];

    const toLine = i => (<li key={i.id} className="nav-item">
      <button className="nav-link" onClick={i.fx}>
        Load example #{i.name}
      </button>
    </li>);

    return <ul className="nav">
      {navs.map( toLine )}
    </ul>
  }

  render() {    
    const { jsContent } = this.state;

    return (
      <div className="container">
        <h1>Tabular Export</h1>
        <p>
          Turn <code>JSON</code> lists into Excel files (.xlsx).
        </p>

        {this.renderNav()}

        <div className="row">
          <div className="col-md-12">
            <textarea className="form-control" style={{minWidth: '100%', height: '400px'}} placeholder={'insert your json here'} value={formatJsArray(jsContent)} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" type="submit" onClick={this.onClick}>
              Download <i className="fa fa-file-excel"/>
            </button>
          </div>
        </div> 
      </div>
    );
  }
}