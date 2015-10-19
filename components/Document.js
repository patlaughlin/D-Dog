'use strict';

import React, { Component } from 'react';

export default class Document extends Component {
  render() {
    console.log(this.props.content);
    return (
      <div>
        <article className="stage-document" dangerouslySetInnerHTML={this.props.content} />
      </div>
    )
  }
}
