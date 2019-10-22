import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, Button, PanelHeaderBack, Separator, Footer, PopoutWrapper } from '@vkontakte/vkui';
import { PANEL_MAIN, PANEL_EVENT_SENT, STATUS_DEFAULT, STATUS_REQUESTED, STATUS_APPROVED, PANEL_EVENT_INFO } from '../constants';
import { EventPropType } from '../base';
import Role from '../Components/Role';
import './EventInfo.css';
import Icon24Qr from '@vkontakte/icons/dist/24/qr';
import vkQr from 'vk-qr';

export default class EventInfo extends Component {
  static propTypes = {
    event: PropTypes.shape(EventPropType),

    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    updateEventStatus: PropTypes.func,
    hidePopout: PropTypes.func,
    showPopout: PropTypes.func,
  };

  render() {
    const { event } = this.props;
	
	var shelter;
	for (var i=0; i< global.shelters.length; i++){
		if (event.shelter === global.shelters[i].id){
			shelter = global.shelters[i];
		}
	}
	
    return (
      <Fragment>
        <PanelHeader
          left={<PanelHeaderBack onClick={() => this.props.go(PANEL_MAIN)} />}
        >{event.title}
        </PanelHeader>

        <div className="EventInfo">
          <div className="EventInfo__in">
            {event.cover && <div className="EventInfo__cover">
              <img src={event.cover} />
              {event.status === STATUS_APPROVED &&
              <div className="EventInfo__qr" onClick={() => {
                const qrSvg = vkQr.createQR(event.title, {
                  qrSize: 182,
                  isShowLogo: true,
                });

                this.props.showPopout(
                  <PopoutWrapper
                    onClick={() => this.props.hidePopout()}
                  >
                    <div className="EventInfoQr">
                      <div className="EventInfoQr__title">Персональный QR Code</div>
                      <div className="EventInfoQr__svg">
                        <div dangerouslySetInnerHTML={{ __html: qrSvg }} />
                      </div>
                      <div className="EventInfoQr__caption">Дайте отсканировать этот QR ментору на площадке</div>
                      <div className="EventInfoQr__caption">Не забудьте, свой QR нужно показать на входе и на выходе</div>
                    </div>
                  </PopoutWrapper>
                );
              }}>
                <Icon24Qr width={28} height={28} />
              </div>}
            </div>}

            <div className="EventInfo__title">{event.title}</div>
            {event.place && <div className="EventInfo__where">{event.place}<br/>{shelter.title}<br/>{event.date}</div>}

          

            <div
              className="EventInfo__description"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />

            <div className="EventInfo__footer">
              {event.status === STATUS_DEFAULT &&
              <Button size="xl" onClick={() => {
				fetch('http://127.0.0.1:8000/api/v1/task/detail/'+event.id, {method: 'PUT', // Method itself
																			 headers: {
																			  'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
																			 },
																			 body: JSON.stringify({'id': event.id, 'status': 2}) })
                this.props.update(PANEL_EVENT_SENT, { event });
                this.props.go(PANEL_EVENT_SENT);
              }}>Подать заявку</Button>}

              {event.status === STATUS_REQUESTED &&
              <Button size="xl" onClick={() => {
				  fetch('http://127.0.0.1:8000/api/v1/task/detail/'+event.id, {method: 'PUT', // Method itself
																			 headers: {
																			  'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
																			 },
																			 body: JSON.stringify({'id': event.id, 'status': 1}) })
                this.props.updateEventStatus(event.id, STATUS_DEFAULT);
                this.props.update(PANEL_EVENT_INFO, {
                  event: {
                    ...event,
                    status: STATUS_DEFAULT,
                  },
                });
              }}>Отменить заявку</Button>}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}