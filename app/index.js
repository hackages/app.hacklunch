import React from 'react';
import ReactDOM from 'react-dom';

const Shell = React.createClass({
  render() {
    return <div>HackLunch is running</div>;
  }
});

ReactDOM.render(<Shell/>, document.getElementById('hacklunch'));
