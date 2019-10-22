import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Дополнительные сведения
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
            <span class="textView">Приют</span>
            <input type="text" onChange={(e)=> {
                global.that.setState({shelter: e.target.value})
            }}>
          </input>
        </Grid>
        <Grid item xs={12} md={6}>
        <span class="textView">Дата</span>
          <input type="text" onChange={(e)=> {
                global.that.setState({date: e.target.value})
            }}>
          </input>       
          </Grid>
        <Grid item xs={12} md={6}>
        <span class="textView">Минимальное количкство опыта</span>
          <input type="text" onChange={(e)=> {
            global.that.setState({XP: e.target.value})
          }}>
          </input>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
