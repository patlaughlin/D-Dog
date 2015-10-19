import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setContent } from '../actions';
import Editor from './../components/Editor';
import Document from './../components/Document';

export class App extends Component {
  render() {
    console.log(this.props);
    const { dispatch, content } = this.props;
    return (
      <div>
        <Editor
          onInput={text =>
            dispatch(setContent(text))
          }/>
        <Document
          text={content}/>
      </div>
    );
  }
}

App.propTypes = {
  content: PropTypes.object.isRequired
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    content: state.content
  };
}

export default connect(select)(App);

