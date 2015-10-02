'use strict';

import React, { Component } from 'react';
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

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state       = {
      value: {
        __html: ''
      }
    };
  }

  handleInput(e) {
    let rawMarkup = marked(e.target.value);
    this.setState({
      value: {
        __html: rawMarkup
      }
    });
  }

  render() {
    let value = this.state.value;
    return (
      <div>
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
