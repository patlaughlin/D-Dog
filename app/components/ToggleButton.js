import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ToggleButton extends Component {
  render() {
    let self       = this;
    let labelClass = classNames({
      'is-checked': self.props.filter === 'SHOW_DOCUMENT' ? 'is-checked' : ''
    });

    return (
      <div className="visible-sm-block visible-xs-block">
        <div onClick={this.props.toggleView}>
          <label className={labelClass} htmlFor="switch-2" id="toggle-view">
            <input type="checkbox" id="switch-2" className="mdl-switch__input"/>
            <span className="mdl-switch__label"></span>
          </label>
        </div>

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
