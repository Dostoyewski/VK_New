import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, FormLayout, FormStatus, Button, Input, PanelHeaderBack, View, Panel, Slider, Select, Group, Div, InfoRow,
  Progress, File, Tabs, TabsItem, Avatar } from '@vkontakte/vkui';
import './TabAccount.css';
import TabAdmin from './TabAdmin';
import { tsMethodSignature } from '@babel/types';
import vkConnectPromise from '@vkontakte/vk-connect-promise';


export default class TabAccount extends Component {
  static propTypes = {
    userInfo: PropTypes.object,
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };
  
  state = {
    clicked: 'false'
  }

  static defaultProps = {
    userInfo: {
      first_name: 'Негр',
      last_name: 'Танцующий',
      photo_200: 'http://pics.wikireality.ru/upload/thumb/f/f4/82f2426f2971.jpg/300px-82f2426f2971.jpg',
      bdate: '12.11.2000',
	  exp: 280,
	  level: 1
    },
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
	
  checkboxChange = () => {
	  // ХЕНДЛЕР ДЛЯ ЧЕКБОКСА
	  console.log('Федор хуй');
  }

  

  render() {
    const { userInfo } = this.props;
    global.shelters = [
      {
      "id": 1,
      "title": "Центр помощи бездомным животным \"Лучик\" г. Надым",
      "description": "Приют для бездомных животных города Надым",
      "image": "http://127.0.0.1:8000/api/v1/shelter/getlist/images/schem.JPG",
      "members": "",
      "urlVK": "137239419"
      },
      {
      "id": 2,
      "title": "Приют города Салехарда",
      "description": "Приют для бездомных животных",
      "image": "http://127.0.0.1:8000/api/v1/shelter/getlist/images/no-img.jpg",
      "members": "",
      "urlVK": "147993097"
      }
      ];
    console.log(global.shelters);
    var flag = false;
    for (var i = 0; i < global.vlt.length; i++){
      if (global.vlt[i].urlVK === (global.user_info.id).toString()) {

        flag = true;
      }
    } 
  
    if (!flag){
      console.log('flag')
      fetch('http://127.0.0.1:8000/api/v1/vlt/create/', {
      method: 'POST', // Method itself
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      //'birth_date': global.user_info.bdate,
      'phone': global.phone_number,
      'vorname': global.user_info.first_name,
      'nachname': global.user_info.last_name,
      'urlVK': global.user_info.id,
      //'profile_image': global.user_info.photo_200,
      })}).then(function(res){ console.log(res) })
      .catch(function(res){ console.log(res) });

    }

    console.log(global.user_info)
    console.log(flag)
    var searcher = {};
    for (var i = 0; i < global.shelters.length; i++){
      searcher[global.shelters[i].urlVK] = global.shelters[i].title;
      const startPage = (
        <Fragment>
        <div className="Account">
          <div className="Account__in">
            <div className="Account__header">
              <div className="Account__hero">
                <div className="Account__avatar">
                  <img src={userInfo.photo_200} />
                </div>
                <div className="Account__name">{userInfo.first_name} {userInfo.last_name}, level {userInfo.level}</div>
              </div>
			  <div className="Account_progress">
			    <progress value={userInfo.exp} max={300}></progress><br/>
				{userInfo.exp}/{300}
			  </div>
            </div>

            <div className="Account__data">
              {/* <div className="Account__dataTabs">
                <Tabs>
                  <TabsItem>Данные</TabsItem>
                  <TabsItem>Отзывы</TabsItem>
                  <TabsItem>История</TabsItem>
                </Tabs>
              </div> */}

              <FormLayout>
                <Input 
                  top="Дата рождения"
                  value={userInfo.bdate}
                  onChange={() => {}}
                />
                <Input 
                  top="Номер телефона"
                  value={ global.phone_number }
                  onChange={() => {}}
                />
                <center>
                  <img src='https://barcode.tec-it.com/barcode.ashx?data=AA1234' alt="Карта волонтера" />
                </center>
				 <p>&emsp;	    
				  <label>
					<input type="checkbox" onChange={this.checkboxChange} />
					<span>Наличие аллергии на животных {}</span>
				  </label>
				</p>
        <div className="Account_admin">
              {userInfo.id in searcher &&
                <button onClick = {() => { 
                    this.setState({loadWorksheep: true})
                }}> Страница администратора</button>
              }
        </div>
              </FormLayout>
            </div>
          </div>
        </div>

        {/* <div>
            Карма
        </div>
        <div>
          <FormLayout>
            <File top="Загрузите ваше фото" before={<Icon28Camera />} size="l">
            Открыть галерею
            </File>
            <InfoRow title="Default">
              <Progress value={40} />
            </InfoRow>
          </FormLayout>
        </div> */}

        <div style={{ height: 60 }} />
      </Fragment>
      );

    return (
      <div>{ this.state.loadWorksheep ? <WorksheetSelector/> : startPage }</div>
    );
  }
  }
}

function WorksheetSelector(props) {
  return (
      <div>
          <h1>Выберите группы</h1>
          <button>Next step</button>
      </div>
  );
}

