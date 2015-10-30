'use strict';

import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class Document extends Component {
  render() {
    let documentClasses = classNames({
      'document': true,
      'visible': this.props.isVisible,
      'hidden-sm hidden-xs hidden-md': !this.props.isVisible
    });
    return (
      <div className={documentClasses}>
        <article className="stage-document" dangerouslySetInnerHTML={this.props.text}/>
      </div>
    )
  }
}

Document.propTypes = {
  text: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired
};
