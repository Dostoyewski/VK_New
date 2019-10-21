import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, FixedLayout, Tabs, TabsItem, Select, FormLayout} from '@vkontakte/vkui';
import { TAB_EVENTS, TAB_WORK, TAB_MAP, TAB_ACCOUNT, TAB_DONATE, PANEL_MAIN } from '../constants';
import TabEvents from './TabEvents';
import TabDonate from './TabDonate';
import TabAccount from './TabAccount';
import TabMap from './TabMap';
import TabWork from './TabWork';
import Icon20CalendarOutline from '@vkontakte/icons/dist/20/calendar_outline';
import Icon20WorkOutline from '@vkontakte/icons/dist/20/work_outline';
import Icon24Globe from '@vkontakte/icons/dist/24/globe';
import Icon28Profile from '@vkontakte/icons/dist/28/profile';

export default class Main extends Component {
  static propTypes = {
    activeTab: PropTypes.string,
    go: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
  };

  static defaultProps = {
    activeTab: TAB_EVENTS,
  };

  onTabClick = (e) => {
    this.props.update(PANEL_MAIN, {
      activeTab: e.currentTarget.dataset.id,
    });
  };
  onDonate = (e) => {
	 this.props.update(PANEL_MAIN, {
	 activeTab: TAB_DONATE});
  };
  

  getTabComponent = () => {
    const { activeTab } = this.props;

    switch (activeTab) {
      case TAB_EVENTS:
        return TabEvents;

      case TAB_WORK:
        return TabWork;

      case TAB_MAP:
        return TabMap;

      case TAB_ACCOUNT:
        return TabAccount;
		
	  case TAB_DONATE:
        return TabDonate;

      default:
        return <div>Что-то пошло не так, нет такой вкладки</div>;
    }
  }

  render() {
    const { activeTab } = this.props;
    const TabComponent = this.getTabComponent();

    return (
      <Fragment>
        <PanelHeader>ПОМОГИ БАРБОСУ</PanelHeader>

        <TabComponent
          {...this.props}
        />
			<div class="fixed-action-btn" style={{bottom:60}}>
				<a class="btn-floating btn-large waves-effect waves-light red" onClick={this.onDonate}><i class="large material-icons">attach_money</i></a>
			</div>
	
		<FixedLayout vertical="bottom">
          <Tabs>
            <TabsItem
              data-id={TAB_EVENTS}
              selected={activeTab === TAB_EVENTS}
              onClick={this.onTabClick}
            ><Icon20CalendarOutline width={25} height={25}/></TabsItem>

            <TabsItem
              data-id={TAB_WORK}
              selected={activeTab === TAB_WORK}
              onClick={this.onTabClick}
            ><Icon20WorkOutline width={25} height={25}/></TabsItem>

            <TabsItem
              data-id={TAB_MAP}
              selected={activeTab === TAB_MAP}
              onClick={this.onTabClick}
            ><Icon24Globe width={25} height={25}/></TabsItem>

            <TabsItem
              data-id={TAB_ACCOUNT}
              selected={activeTab === TAB_ACCOUNT}
              onClick={this.onTabClick}
            ><Icon28Profile width={25} height={25}/></TabsItem>
          </Tabs>
        </FixedLayout>
      </Fragment>
    );
  }
}