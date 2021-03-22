import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function VolumeSlider(props) {
  const { alerts, setAlerts } = props
  const classes = useStyles();

  const handleChange = (event, value) => {
    console.log(event)
    if (value > 80) {
      setAlerts([...alerts, "Listening to music at a high volume could cause long-term hearing loss."])
    } 
  };

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={100}
        onChange={handleChange}
      />
    </div>
  );
}