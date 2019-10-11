import React from 'react';

import { Link } from 'react-router-dom';

const style = {
  borderTop: '1px solid #e5e5e5',
  borderBottom: '1px solid #e5e5e5',
  boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .05)'
}

export default (props) => {
  return (<React.Fragment>
    <header>
      <div style={style} class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
      <h5 class="my-0 mr-md-auto font-weight-normal"><Link to="/">Xlsx Tabular</Link></h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <Link class="p-2 text-dark" to="/tables">Rows To Xlsx</Link>
        <Link class="p-2 text-dark" to="/lines">Lines to rows</Link>
      </nav>
    </div>
    </header>

    <main role="main">
      <div className="container">
        {props.children}
      </div>
    </main>
  </React.Fragment>);
}
