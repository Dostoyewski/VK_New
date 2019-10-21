import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map } from 'react-yandex-maps';

export default class TabMap extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <YMaps>
            <div>
              My awesome application with maps!
              <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            </div>
          </YMaps>

        <div style={{ height: 60 }} />
      </Fragment>
    );
  }
}