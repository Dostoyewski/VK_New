import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-connect';

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

  

  vkPay = () => {
    connect.send("VKWebAppInit", {});
    connect.send("VKWebAppOpenPayForm", {"app_id": 7175703, "action": "pay-to-group", 
          "params": {"group_id": 180054668, "description": "Money", "amount": "50"}});
  }
   

  

  render() {
    const {  } = this.props;
    return (
        <div>
           <TestInput>
           </TestInput>
          <button class="pay-button">Пожертвовать</button>
        </div>
    );
  }
}

class TestInput extends React.Component {
  state = {
    amount: '',
    discription: '',
  }
  // используется e.currentTarget.value
  onAmountChange = (e) => {
    this.setState({ amount: e.currentTarget.value })
  }

  onDescriptionChange = (e) => {
    this.setState({ discription: e.currentTarget.value })
  }
  render() {
    return (
      <React.Fragment>
        <div class="input_amount">
          <span>Ведите сумму платежа</span>
          <input
            className='test-input'
            onChange={this.onAmountChange}
            value={this.state.myValue}
          />
        </div>
        <div class="input_description" >
          <span>Ведите описание</span>
          <input
            className='test-input'
            onChange={this.onDescriptionChange}
            value={this.state.myValue}
          />
        </div>
      </React.Fragment>
    )
  }
}