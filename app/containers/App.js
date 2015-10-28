import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setContent, setVisibilityFilter } from '../actions';
import { VisibilityFilters } from '../constants/ActionTypes';
import Editor from './../components/Editor';
import Document from './../components/Document';
import ToggleButton from './../components/ToggleButton';
import 'mousetrap';

const { SHOW_EDITOR, SHOW_DOCUMENT } = VisibilityFilters;

export class App extends Component {
  constructor(props) {
    super(props);
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    const { dispatch, visibilityFilter } = this.props;

    console.log('hey');

    if (visibilityFilter === SHOW_DOCUMENT) {
      dispatch(setVisibilityFilter(SHOW_EDITOR))
    } else if (visibilityFilter === SHOW_EDITOR) {
      dispatch(setVisibilityFilter(SHOW_DOCUMENT))
    }

  }

  componentDidMount() {
    let self = this;

    Mousetrap.bind(['command+e', 'ctrl+e'], function() {
      self.toggleView();
    });
  }

  render() {
    const { dispatch, content, visibilityFilter } = this.props;
    return (
      <div ref="app">
        <ToggleButton
          filter={visibilityFilter}
          toggleView={this.toggleView} />
        <Editor
          isVisible={visibilityFilter === SHOW_EDITOR}
          onInput={text =>
            dispatch(setContent(text))
          }/>
        <Document
          isVisible={visibilityFilter === SHOW_DOCUMENT}
          text={content}/>
      </div>
    );
  }
}

App.propTypes = {
  content: PropTypes.object.isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_EDITOR',
    'SHOW_DOCUMENT'
  ]).isRequired
};

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    content: state.content,
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(select)(App);

