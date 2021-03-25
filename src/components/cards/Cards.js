import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function Cards(props) {
  const { title, body, children } = props

  return (
      <Card className="card statusCard">
        <CardContent>
          <Typography variant="h6" component="h6">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          {children}
        </CardActions>
      </Card>
  );
}
