import React from 'react';

import * as Utils from '../utils';
import * as SrtToVtt from '../lib/srt-vtt';

export default () => {
  const [ data, setData ] = React.useState(null);
  const onChange = event => {
    const file = event.target.files[0];
    Utils.readFile(file).then(setData);
  }
  
  const handleClick = a => {
    if (data === null) {
      alert('no content available')
    }

    try {
      const j = SrtToVtt.srtToJson(data.split('\r\n'));
      const txt = SrtToVtt.jsonToVtt(j);
      Utils.toExportTxt(txt);
    } catch (err) {
      console.log(err)
    }
  }

  const name = 'file';
  return (<>
    <input type="file" name={name} onChange={onChange}/>
    <button className="btn btn-primary" type="submit" onClick={handleClick}>
      Download <i className="fa fa-file"/>
    </button>
  </>);
}