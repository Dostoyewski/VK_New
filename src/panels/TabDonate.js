import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class TabAccount extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  static defaultProps = {
    
  };

  constructor (props) {
    super(props);

    this.state = {
      
    };
  
  }

  render() {
    const {  } = this.props;
    return (
        <div>Байт на донат</div>
    );
  }
}