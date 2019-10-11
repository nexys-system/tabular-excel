import React from 'react';

import Hoc from '@nexys/reactutils';

class MyTextarea extends React.Component {
  render() {
    const myClass = 'form-control';

    return (
      <textarea
      /* eslint-disable react/forbid-component-props */
        className={myClass}
        value={this.props.value}
        onChange={this.props.onChange}
        onBlur={this.props.handleBlur}
        rows={this.props.rows}
        cols={this.props.cols}
        placeholder={this.props.placeholder}
        disabled={this.props.disabled}
        style={{minWidth: '100%', height: '400px'}}
        />
    );
  }
}

export default Hoc.Textarea()(MyTextarea);
