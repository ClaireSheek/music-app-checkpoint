import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import QualityOption from './controls/QualityOption';


export default function SoundQuality( props ) {
  const { alerts, setAlerts } = props


  return (
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
  );
}