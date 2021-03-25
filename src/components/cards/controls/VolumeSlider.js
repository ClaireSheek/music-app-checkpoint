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
  const { alerts, setAlerts, setVolume } = props
  const classes = useStyles();

  const handleChange = (event, value) => {
    setVolume(value)
    let warning = "Listening to music at a high volume could cause long-term hearing loss."
    let index = alerts.indexOf(warning)
    let newAlerts = alerts

    if (value > 80 && index === -1) {
      setAlerts([...newAlerts, warning])
    } else if (index > -1) {
      newAlerts.splice(index, 1)
      setAlerts(newAlerts)
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
        min={0}
        max={100}
        onChange={handleChange}
      />
    </div>
  );
}