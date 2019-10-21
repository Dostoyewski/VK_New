import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class TabMap extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <div className="SputnikCard">
          <div className="SputnikCard__in">
            <img src={require('../img/card.jpg')} />
          </div>
        </div>

        <div className="CardBonus">
          <div className="CardBonus__in">
            <div className="CardBonus__rows">
              <div className="CardBonus__row">
                <div className="CardBonus__rowTitle">Музейное безумие</div>
                <div className="CardBonus__caption">Музейное безумие - это уникальная возможность студентов Москвы совершить бесплатное путешествие по лучшим музеям столицы!</div>
              </div>
              <div className="CardBonus__row">
                <div className="CardBonus__rowTitle">«Ночь кино» в Музее Героев</div>
                <div className="CardBonus__caption">Музей Героев посвятил прошедшую «Ночь кино» героям, чья жизнь была связана с небом. Показ художественного фильма «Валерий Чкалов» собрал зрителей…</div>
              </div>
              <div className="CardBonus__row">
                <div className="CardBonus__rowTitle">???</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 60 }} />
      </Fragment>
    );
  }
}