import React, { Component, PropTypes } from 'react';
import 'mousetrap';

export default class HotKeys extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let self = this;
  }
  render() {
    return (
      <div></div>
    );
  }
}

HotKeys.propTypes = {
  toggleView: PropTypes.func.isRequired
};
