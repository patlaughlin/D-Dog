import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Editor from './../components/Editor';
import Document from './../components/Document';

export class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <Editor />
        <Document />
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
  };
}

export default connect(select)(App);

