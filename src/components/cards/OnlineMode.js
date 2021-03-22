import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from './controls/StatusSwitch'


export default function OnlineMode(props) {
  const { alerts, setAlerts } = props

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" component="h6">
          Online Mode
        </Typography>
        <Typography variant="body2" component="p">
          Is this application connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
        <Switch alerts={alerts} setAlerts={setAlerts}/>
      </CardActions>
    </Card>
  );
}