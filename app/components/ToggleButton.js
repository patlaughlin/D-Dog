import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ToggleButton extends Component {
  render() {
    let self = this;
    let isChecked = self.props.filter === 'SHOW_DOCUMENT' ? 'is-checked' : '';

    let labelClass = classNames({
      'tgl tgl-flat': true
    });

    return (
      <div className="visible-sm-block visible-xs-block">
        <input onClick={this.props.toggleView} id="toggle-btn" checked={isChecked} type="checkbox" className={labelClass}/>
        <label htmlFor="toggle-btn" className="tgl-btn"></label>

        <div className="mdl-tooltip mdl-tooltip" htmlFor="toggle-view">
          ⌘ + E
        </div>
      </div>
    );
  }
}

ToggleButton.propTypes = {
  toggleView: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_EDITOR',
    'SHOW_DOCUMENT'
  ]).isRequired
};
