import React from "react";

import { Link } from "react-router-dom";

const style = {
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  boxShadow: "0 .25rem .75rem rgba(0, 0, 0, .05)",
};

export default ({ children }: { children: any }) => {
  return (
    <React.Fragment>
      <header>
        <div
          style={style}
          className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white"
        >
          <h5 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/">Xlsx Tabular</Link>
          </h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/tables">
              Rows To Xlsx
            </Link>
            <Link className="p-2 text-dark" to="/lines">
              Lines to rows
            </Link>
            <Link className="p-2 text-dark" to="/csv">
              CSV
            </Link>
            <Link className="p-2 text-dark" to="/srtToVtt">
              SRT to VTT
            </Link>
          </nav>
        </div>
      </header>

      <main role="main">
        <div className="container">{children}</div>
      </main>
    </React.Fragment>
  );
};
