'use strict';

import React, { Component, PropTypes } from 'react';

export default class Document extends Component {
  render() {
    let isVisible = this.props.isVisible;
    console.log(this.props);
    return (
      <div style={{display: isVisible ? "block" : "none"}}>
        <article className="stage-document" dangerouslySetInnerHTML={this.props.text}/>
      </div>
    )
  }
}

Document.propTypes = {
  text: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired
};
