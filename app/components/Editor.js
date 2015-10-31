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

  handleInput(e) {
    let rawMarkup = marked(e.target.value);
    console.log(e);
    this.props.onInput({
      __html: rawMarkup
    });
  }

  componentDidMount() {
    this._textarea.focus();
  }

  render() {
    let editorClasses = classNames({
      'visible': this.props.isVisible,
      'hidden-sm hidden-xs hidden-md': !this.props.isVisible
    });

    if (typeof this._textarea !== typeof undefined) {
      if (this.props.isVisible) {
        this._textarea.focus();
        console.log('focus()');
      } else {
        console.log('blur');
        this._textarea.blur();
      }
    }

    return (
      <div className={editorClasses}>
          <textarea ref={(c) => this._textarea = c} className="editor mousetrap" type="text" rows="10"
                    onInput={this.handleInput} placeholder="Markdown..."></textarea>
      </div>
    )
  }
}

Editor.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onInput: PropTypes.func.isRequired
};
