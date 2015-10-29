import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class ToggleButton extends Component {
  render() {
    let self       = this;
    let labelClass = classNames({
      'mdl-switch mdl-js-switch mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events is-upgraded': true,
      'is-checked': self.props.filter === 'SHOW_DOCUMENT' ? 'is-checked' : ''
    });
    return (
      <div>
        <label onClick={this.props.toggleView} className={labelClass} htmlFor="switch-2" id="toggle-view">
          <input type="checkbox" id="switch-2" className="mdl-switch__input"/>
          <span className="mdl-switch__label"></span>
        </label>

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
