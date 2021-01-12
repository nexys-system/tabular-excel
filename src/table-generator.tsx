import React from "react";

import * as Utils from "./utils";
import * as Example from "./examples/index";

export default class TableGenerator extends React.Component<
  {},
  { jsContent: string[]; content: string }
> {
  constructor(props: any) {
    super(props);

    this.state = { content: "", jsContent: [] };
  }

  onClick = () => {
    const { content } = this.state;

    Utils.toExport(content);
  };

  handleChange = (a: { target: { value: string } }) => {
    try {
      const content = a.target.value;

      this.setState({ content });
    } catch (err) {}
  };

  loadExample = (exampleId: number) => {
    const jsContent = Example.load(exampleId);
    this.setState({ content: Utils.jsonBeautify(jsContent) });
  };

  renderNav = () => {
    const navs = [
      { id: 1, name: "user simple", fx: () => this.loadExample(1) },
      { id: 2, name: "user advanced", fx: () => this.loadExample(2) },
      { id: 3, name: "multi page", fx: () => this.loadExample(3) },
      { id: 4, name: "merge", fx: () => this.loadExample(4) },
    ];

    const toLine = (i: { id: number; fx: any; name: string }) => (
      <li key={i.id} className="nav-item">
        <button className="nav-link" onClick={i.fx}>
          Load example #{i.name}
        </button>
      </li>
    );

    return <ul className="nav">{navs.map(toLine)}</ul>;
  };

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
            <textarea
              className="form-control"
              style={{ minWidth: "100%", height: "400px" }}
              placeholder={"insert your json here"}
              value={content}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.onClick}
            >
              Download <i className="fa fa-file-excel" />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
