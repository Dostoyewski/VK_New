import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, FormLayout, FormStatus, Button, Input, PanelHeaderBack, View, Panel, Slider, Select, Group, Div, InfoRow,
  Progress, File, Tabs, TabsItem, Avatar } from '@vkontakte/vkui';
import vkConnectPromise from '@vkontakte/vk-connect-promise';


export default class TabLost extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };
  
  state = {
    clicked: 'false'
  }

  static defaultProps = {
      
  };

  constructor (props) {
    super(props);

    this.state = {
      value1: 50,
      loadWorksheep: false
    };
  }

  options () {
    const options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>);
    }
    return options;
  }

sending = () => {
    vkConnectPromise
      .send('VKWebAppGetGeodata')
      .then(data => {
        global.lat = data.lat;
        global.lon = data.lon;
        console.log(global.lat, global.lon)
      })
      .catch(error => {
        // Handling an error
      });
}  

  render() {
    const { userInfo } = this.props;
      const startPage = (
        <Fragment>
        
      </Fragment>
      );
    return (
      <div>
          <form>
          <span class="textView">Описание проблемы</span>
            <input type='text'></input>
            <span class="textView">Примерное местоположение</span>
            <input type='text'></input>
            <span class="textView">Особые приметы</span>
            <input type='text'></input>
            <input type='submit' onClick={this.sending}></input>
          </form>  
      </div>
    );
  }
  }

