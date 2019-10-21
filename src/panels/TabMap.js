import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl} from 'react-yandex-maps';


export default class TabMap extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  state = {
    
  }

placeMark = {
    geometry: [66.539792, 66.588339],
    properties: {
        hintContent: 'Это хинт',
        balloonContent: 'Это балун'
    },
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
    
}
  
  render() {
    return (
      <Fragment>
        <YMaps>
            <div>
              <Map 
                width={1000}
                height={640}
                defaultState={{ center: [66.540470, 66.707990], zoom: 12 }} >
                <Placemark {...{
                    geometry: [66.539792, 66.588339],
                    properties: {
                        hintContent: 'Это хинт',
                        balloonContent: 'Это балун'
                    },
                    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
                  }
                } 
                />
                <Placemark {...{
                    geometry: [66.5299819,66.6093746],
                    properties: {
                        hintContent: 'Это хинт',
                        balloonContent: 'Это балун'
                    },
                    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
                  }
                } 
                 />
                <Placemark {...{
                    geometry: [66.5341446,66.6407188],
                    properties: {
                        hintContent: 'Это хинт',
                        balloonContent: 'Это балун'
                    },
                    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint']
                  }
                } 
                />

                <ZoomControl options={{ float: 'right' }} />
              </Map>
            </div>
          </YMaps>
        <div />
      </Fragment>      
    );
  }
}