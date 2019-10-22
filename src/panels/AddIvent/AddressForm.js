import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { func } from 'prop-types';
import { PanelHeader, FormLayout, FormStatus, Button, Input, PanelHeaderBack, View, Panel, Slider, Select, Group, Div, InfoRow,
  Progress, File, Tabs, TabsItem, Avatar } from '@vkontakte/vkui';

export default function AddressForm() { 

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <span class="textView">Название</span>
          <input type="text" value={global.that.state.title} onChange={(e)=> {
            global.that.setState({title: e.target.value})
          }}>
          </input>
          </Grid>
        <Grid item xs={12} sm={6}>
        <span class="textView">Место мероприятия</span>
          <input type="text" onChange={(e)=> {
            global.that.setState({place: e.target.value})
          }}>
          </input>
          </Grid>
          <span class="textView">Описание</span>
        <input type="text" onChange={(e)=> {
            global.that.setState({description: e.target.value})
          }}>
          </input>
          </Grid>
        <Grid item xs={12} sm={6}>
          
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" 
            onChange={(e)=>{
              global.that.setState({allergy: e.target.value})
            }} />}
            label="Это задание может быть выполнено алергиком"
          />
        </Grid>
    </React.Fragment>
  );
}

