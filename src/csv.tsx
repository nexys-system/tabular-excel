import React from "react";

import * as Utils from "./utils";
import * as Example from "./examples/index";

export default class TableGenerator extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = { content: "", jsContent: [] };
  }

  onClick = () => {
    const { content } = this.state;

    Utils.toCsv(content);
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
    const navs = [{ id: 5, name: "Simple CSV", fx: () => this.loadExample(5) }];

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
        <h1>CSV</h1>
        <p>
          Turn <code>JSON</code> lists into CSV files (.csv).
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
              Download <i className="fa fa-file" />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
