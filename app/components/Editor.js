'use strict';

import React, { Component, PropTypes } from 'react';
import marked from 'marked';
import classNames from 'classnames';
import 'mousetrap';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
  }

  handleInput(e) {
    let rawMarkup = marked(e.target.value);
    console.log(e);
    this.props.onInput({
      __html: rawMarkup
    });
  }

  render() {
    let editorClasses = classNames({
      'visible': this.props.isVisible,
      'hidden-sm hidden-xs hidden-md': !this.props.isVisible
    });
    return (
      <div className={editorClasses}>
          <textarea className="editor mousetrap" type="text" rows="10"
                    onInput={this.handleInput} placeholder="Markdown..."></textarea>
      </div>
    )
  }
}

Editor.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onInput: PropTypes.func.isRequired
};
