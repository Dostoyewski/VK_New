import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark } from 'react-yandex-maps';


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
              <Map 
                width={1920}
                height={1080}
                defaultState={{ center: [66.547942, 66.600562], zoom: 9 }} >
              <Placemark geometry={[66.539792, 66.588339]} />
              </Map>
            </div>
          </YMaps>
        <div />
      </Fragment>      
    );
  }
}