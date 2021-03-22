import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import VolumeSlider from './controls/VolumeSlider'


export default function MasterVolume(props) {
  const { alerts, setAlerts } = props


  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h6" component="h6">
          Master Volume
        </Typography>
        <Typography variant="body2" component="p">
          Overrides all other sound settings in this application
        </Typography>
      </CardContent>
      <CardActions>
        <VolumeSlider alerts={alerts} setAlerts={setAlerts}/>
      </CardActions>
    </Card>
  );
}