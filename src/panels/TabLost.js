import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, FormLayout, FormStatus, Button, Input, PanelHeaderBack, View, Panel, Slider, Select, Group, Div, InfoRow,
  Progress, File, Tabs, TabsItem, Avatar } from '@vkontakte/vkui';
import vkConnectPromise from '@vkontakte/vk-connect-promise';
import vkConnect from '@vkontakte/vk-connect';
import "./TabLost.css"; 

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
      loadWorksheep: false,
      post: false
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
    //.log(vkConnect.send("VKWebAppGetAuthToken", {"app_id": 7175703, "scope": "wall"}))
    vkConnectPromise
      .send('VKWebAppGetAuthToken', {"app_id": 7175703, "scope": "wall, notes, messages"})
      .then(data => {
        global.token = data.access_token;
        console.log(global.token)
      })
      .catch(error => {
        // Handling an error
      });

      //vkConnect.send("VKWebAppCallAPIMethod", {"method": "wall.post", "request_id": "32test", "params": {"owner_id": global.user_info.id, "from_group": 0, "message": 'test', "v":"5.102", "access_token":global.token}});
      vkConnect.send("VKWebAppCallAPIMethod", {"method": "messages.send", "request_id": "32test", "params": {"random_id": "12313132", "user_id": 147993097, "message": 'test', "v":"5.102", "access_token": 'vbxhTPebYzKN38FStxtmSY9SM1tA_E8sVvqjnuFRhYgsbVUVbOBIuTtPToBYbKb8'}});
    
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
          <center>
          {!this.state.post &&
        <form>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Описание проблемы</label>
        </div>
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Примерное местоположение</label>
        </div><div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea "></textarea>
          <label for="textarea1">Особые приметы</label>
        </div>
          <Button size="xl" value='Сообщить' onClick={()=>{this.setState({post: true})}}>Сообщить</Button>
        </form> 
        }
         {this.state.post &&
        <label class='posted'>Ваш пост отправлен на обработку!</label>
        }
           </center>
      </div>
    );
  }
  }

