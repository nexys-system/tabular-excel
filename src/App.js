import React from 'react';


import { toXlsx } from './tabular-xlsx'

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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { url: null};
  }
  componentDidMount() {
    const style1 = {font: {color: 'green', alignment: {horizontal: 'right'}, fill: {type: 'pattern', bgColor: 'red'}}};
    
    const styleBoldAndBlue = {font: {color: 'blue', bold: true}};

    const rows = users.map(user => {
      const style = {font: {color: colorByStatus(user.status)}};
      const status = {content: user.status, style: style};
      const age = {content: randomInteger(), style: styleBoldAndBlue};
      return [user.firstName, user.lastName, status, age];
    });
     /* .map(h => { return {content: h, style: }}}),
      [
        `First Name44`,
        `Last Name`,
        `Emaisdl`,
        `UID`,
        `Status`
      ].map(h => { return {content: h, style: {font: {color: 'red', bold: true}}}}),*/
    //];

    toXlsx(rows, 'users').then(x => {
      console.log('i am here')
      console.log(x)
      const b = new Blob([x], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
      
      const url = window.URL.createObjectURL(b);

      this.setState({url})
      });
  }

  render() {
    var text = 'Some data I want to export';
    var data = new Blob([text], {type: 'text/plain'});
    console.log(typeof data)

    //var url = window.URL.createObjectURL(data);
    //console.log(url)
    //document.getElementById('download_link').href = url;
    //
    
    const { url } = this.state;

    if (!url) {
      return null;
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