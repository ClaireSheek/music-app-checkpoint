import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from './controls/StatusSwitch'
import QualityOption from './controls/QualityOption';
import VolumeSlider from './controls/VolumeSlider'


export default function Cards(props) {
  const { alerts, setAlerts } = props

  return (
    <div className="cards">
      <Card className="card statusCard">
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
      
      <Card className="card volumeCard">
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

      <Card className="card soundCard">
        <CardContent>
          <Typography variant="h6" component="h6">
            Sound Quality
          </Typography>
          <Typography variant="body2" component="p">
            Manually conrol the music quality in the event of poor connection
          </Typography>
        </CardContent>
        <CardActions>
          <QualityOption alerts={alerts} setAlerts={setAlerts}/>
        </CardActions>
      </Card>
    </div>
  );
}