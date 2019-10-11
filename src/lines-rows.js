import React from 'react';

import { lineToRows } from './lib/lines-to-rows';
import { toXlsx } from './lib/tabular-xlsx'
import * as Utils from './utils';

import Select from './components/select';
import Input from './components/input';
import Textarea from './components/textarea';

import NUtils from '@nexys/utils';

export default class LineToRows extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nSeqLen: 2,
      form: {mapAttributes: {}},
      json: null
    };
  }

  getXlsx = () => {
    const { form: { mapAttributes }} = this.state
    const a = this.getContent();

    if (a.length) {
      const headers = Object.keys(mapAttributes).map(h => {
        return mapAttributes[h]
      });

      const rows = a.map(row => {
        const r = [];

        headers.map(h => {
          r.push(row[h])
        });

        return r;
      });

      const r = [headers.map(h => {
        return {content: h, style: {font: {bold: true}}}
      })].concat(rows);
      
      const workbookName = 'Users'

      toXlsx(r, workbookName).then(x => {
        const b = Utils.bitToBlob(x, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        const url = window.URL.createObjectURL(b);

        window.location = url;
      });
    }
  }

  getContent = () => {
    const { form } = this.state;
    const { nSeqLen, mapAttributes, content } = form;
    const lines = content.split('\n');
    return lineToRows(lines, mapAttributes, nSeqLen);
  }

  getJson = () => {
    const json = this.getContent()

    this.setState({json});
  }

  handleChange = (a) => {
    try {
      const lines = a.target.value.split('\n');

      this.setState({lines});
    } catch (err) { }
  }

  updateForm = a => {

    const form = NUtils.ds.updateObject(this.state.form, a);

    this.setState({form});
  }

  renderMapAttributes = (nSeqLen) => {
    if (!nSeqLen) {
      return null;
    }

    return Array(nSeqLen).fill(null).map((_, i) => {
      return (<div key={i} className="row">
        <div className="col-sm-1">
          #{i + 1}
        </div>

        <div className="col-sm-2">
          <Input name={'mapAttributes.'+(i+1)} onChange={this.updateForm}/>
        </div>
      </div>);
    })
  }

  renderJson() {
    const { json } = this.state;

    if (!json) {
      return null;
    }

    return (<div className="row">
      <div className="col-sm-1">
        <code>{JSON.stringify(json, null, 2)}</code>
      </div>
    </div>);    
  }

  render() {    
    const { lines, form } = this.state;
    const { nSeqLen } = form;

    const options = Array(100).fill(null).map((x, i) => {
      return {id: i +1, name: i + 1}
    })

    return (
      <React.Fragment>
        <h1>Lines to Rows</h1>
        <p>
          Turn multi-line encoded list in tables.
        </p>

        <div className="row">
          <div className="col-md-12">
            <Textarea placeholder={'insert the content of the file here'} name="content" value={lines} onChange={this.updateForm}/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <Select name={'nSeqLen'}  onChange={this.updateForm} options={options}/>
          </div>
        </div>

        {this.renderMapAttributes(nSeqLen)}

        <div className="row">
          <div className="col">
            <button className="btn btn-primary" type="submit" onClick={this.getXlsx}>
              Download <i className="fa fa-file-excel"/>
            </button>
            &nbsp;
            <button className="btn btn-primary" type="submit" onClick={this.getJson}>
              JSON <i className="fa fa-file-code"/>
            </button>
          </div>
        </div>

        {this.renderJson()}
      </React.Fragment>
    );
  }
}