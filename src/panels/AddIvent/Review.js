import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import EventInfo from "../EventInfo";
import TabAdmin from "../TabAdmin";





const useStyles = makeStyles(theme => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

    

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Проверка
      </Typography>
      <div class="newEventInfo">
          <div class="neEventInfo__place">
              Место<br/>
              <span>{global.that.state.place}</span>
          </div>
          <div class="neEventInfo__title">
              Название<br/>
              <span>{global.that.state.title}</span>
          </div>
          <div class="neEventInfo__place">
              Дата<br/>
              <span>{global.that.state.date}</span>
          </div>
          <div class="neEventInfo__place">
              Приют<br/>
              <span>{global.that.state.shelter}</span>
          </div>
          <div class="neEventInfo__place">
            Описание<br/>
              <span>{global.that.state.description}</span>
          </div>
          
      </div>
    </React.Fragment>
  );
}