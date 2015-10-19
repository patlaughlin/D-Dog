'use strict';

import React, { Component } from 'react';

export default class Document extends Component {
  render() {
    return (
      <div>
        <article className="stage-document" dangerouslySetInnerHTML={this.props.text.content}/>
      </div>
    )
  }
}
