'use strict';

import React, { Component, PropTypes } from 'react';
import marked from 'marked';

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
    this.props.onInput({
      __html: rawMarkup
    });
  }

  render() {
    let isVisible = this.props.isVisible;
    return (
      <div style={{display: isVisible ? "block" : "none"}}>
        <div className="editor">
          <div className="mdl-textfield mdl-js-textfield">
            <textarea className="mdl-textfield__input" type="text" rows="10" onInput={this.handleInput}></textarea>
            <label className="mdl-textfield__label">Markdown...</label>
          </div>
        </div>
      </div>
    )
  }
}

Editor.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onInput: PropTypes.func.isRequired
};
