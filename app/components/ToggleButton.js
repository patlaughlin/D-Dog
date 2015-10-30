import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';

export default class ToggleButton extends Component {
  render() {
    let self      = this;
    let isChecked = self.props.filter === 'SHOW_DOCUMENT' ? 'is-checked' : '';

    let labelClass = classNames({
      'tgl tgl-flat': true
    });

    return (
      <div className="toggle-btn visible-sm-block visible-xs-block">
        <ReactTooltip place="top" type="dark" effect="float"/>
        <input onClick={this.props.toggleView} id="toggle-btn" checked={isChecked} type="checkbox"
               className={labelClass}/>
        <label data-tip="⌘ + E" htmlFor="toggle-btn" className="tgl-btn"></label>
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
