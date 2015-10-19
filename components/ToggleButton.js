import React, { Component, PropTypes } from 'react';

export default class ToggleButton extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name;
    }

    return (
      <a href='#' onClick={e => {
        e.preventDefault();
        this.props.onFilterChange(filter);
      }}>
        {name}
      </a>
    );
  }

  render() {
    return (
      <p>
        {this.renderFilter('SHOW_EDITOR', 'Show Editor')}
        {', '}
        {this.renderFilter('SHOW_DOCUMENT', 'Show Document')}
        .
      </p>
    );
  }
}

ToggleButton.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_EDITOR',
    'SHOW_DOCUMENT'
  ]).isRequired
};
