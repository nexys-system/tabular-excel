import React from 'react';


import { toXlsx } from './lib/tabular-xlsx'
import * as Utils from './utils';

// var text = 'Some data I want to export';
//var data = new Blob([text], {type: 'text/plain'});
//console.log(typeof data)
// example for CSV
//console.log(b)
//
//const b = new Blob(['col1,col2,col3'], {type: 'text/csv'});
//const b = new Blob(csv, {type: 'text/csv'});
//
import users from './examples/users.json';
import multiPage from './examples/multi-page.json';

export default class TableGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { content: '', jsContent: []};
  }

  onClick = () => {
    const { content } = this.state;

    const jsContent = JSON.parse(content);

    const workbookName = 'Users'

    toXlsx(jsContent, workbookName).then(x => {
      const b = Utils.bitToBlob(x, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      const url = window.URL.createObjectURL(b);

      // change filename
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
      // Content-Disposition: inline
      // Content-Disposition: attachment
      // Content-Disposition: attachment; filename="filename.jpg"

      window.location = url;
    });
  }

  handleChange = (a) => {
    try {
      const content = (a.target.value);

      this.setState({content});
    } catch (err) { }
  }

  loadUsersSimple = () => {
    console.log('load')
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

    this.setState({content: JSON.stringify(jsContent,null,'  ')});
  }

  loadUsersAdvanced = () => {
    const styleBoldAndBlue = {font: {color: 'blue', bold: true}};

    const jsContent = users.map(user => {
      const style = {font: {color: Utils.colorByStatus(user.status)}};
      const status = {content: user.status, style: style};
      const age = {content: Utils.randomInteger(), style: styleBoldAndBlue};
      const maleOrFemaleInt = Utils.maleOrFemale();
      const maleOrFemaleText = maleOrFemaleInt === 1 ? 'Male' : 'Female';
      const maleOrFemaleColor = maleOrFemaleInt === 1 ? 'blue' : 'pink';
      const maleOrFemale = {
        content: maleOrFemaleText,
        style:{
          fill:{ type: 'pattern', patternType: 'solid', fgColor: maleOrFemaleColor },
          font: { color: 'white' }
        }
      };

      return [user.firstName, user.lastName, status, age, maleOrFemale];
    });

    this.setState({content: JSON.stringify(jsContent,null,'  ')});
  }

  loadMultiPage = () => {
    const jsContent = multiPage;

    this.setState({content: JSON.stringify(jsContent,null,'  ')});
  }

  loadMerge = () => {
    const jsContent = [
      [{
        "content": "merged",
        "merged": {"v": 1, "h": 2}
      }
      ],
      [], // empty row here that will be filled with merged
      [4, 5, 6],
    ]

    this.setState({content: JSON.stringify(jsContent,null,'  ')});
  }

  renderNav = () => {
    const navs = [
      {id:1, name: 'user simple', fx: this.loadUsersSimple},
      {id:2, name: 'user advanced', fx: this.loadUsersAdvanced},
      {id:3, name: 'multi page', fx: this.loadMultiPage},
      {id:4, name: 'load merge', fx: this.loadMerge}
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
    const { content } = this.state;

    return (
      <React.Fragment>
        <h1>Tabular Export</h1>
        <p>
          Turn <code>JSON</code> lists into Excel files (.xlsx).
        </p>

        {this.renderNav()}

        <div className="row">
          <div className="col-md-12">
            <textarea className="form-control" style={{minWidth: '100%', height: '400px'}} placeholder={'insert your json here'} value={content} onChange={this.handleChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" type="submit" onClick={this.onClick}>
              Download <i className="fa fa-file-excel"/>
            </button>
          </div>
        </div> 
      </React.Fragment>
    );
  }
}