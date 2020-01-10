import React from 'react';

import MultipleFiles from './multiple';
import OneFile from './single';

export default () => {
  return <div className="row">
    <div className="col-md-6">
      <h3>Single File</h3>
      <OneFile/>
    </div>
    <div className="col-md-6">
      <h3>Multiple Files</h3>
      <MultipleFiles/>
    </div>
  </div>
}
