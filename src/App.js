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
console.log(users)

const colorByStatus = status => {
  if (status === 'ok') return 'green';
  if (status === 'inactive') return 'red';
  if (status === 'pending') return 'orange';

  return null
}

const randomInteger = () => Math.ceil(1000*Math.random());

const bitToBlob = (x, type) => new Blob([x], {type});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { url: null};
  }
  componentDidMount() {
    const styleBoldAndBlue = {font: {color: 'blue', bold: true}};

    const rows = users.map(user => {
      const style = {font: {color: colorByStatus(user.status)}};
      const status = {content: user.status, style: style};
      const age = {content: randomInteger(), style: styleBoldAndBlue};
      return [user.firstName, user.lastName, status, age];
    });

    const workbookName = 'Users'

    toXlsx(rows, workbookName).then(x => {
      const b = bitToBlob(x, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      const url = window.URL.createObjectURL(b);

      this.setState({url})
    });
  }

  render() {    
    const { url } = this.state;

    // if url not yet init, display loader
    if (!url) {
      return 'loading...';
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download XLSX
          </a>
        </header>
      </div>
    );
  }
}