import React, { useState, useEffect }from 'react';
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
  // const { alerts, setAlerts } = props
  const [ volume, setVolume ] = useState(0)
  const classes = useStyles();

  //With useEffect
  const warning = "Listening to music at a high volume could cause long-term hearing loss."
  const index = props.alerts.indexOf(warning)

  useEffect(() => {
    if (volume > 80 && index === -1) {
      props.setAlerts([...props.alerts, warning])
      console.log("Too High Alert:", props.alerts)

    } else {
        if(volume < 80) {
          let newAlerts = props.alerts
          newAlerts.splice(index, 1)
          console.log("Volume Alerts:", newAlerts)
          props.setAlerts(newAlerts)
      }
    }

  }, [props.alerts, volume])

  const handleChange = (event, value) => {
    setVolume(value)
  }

//Without useEffect
  // const handleChange = (event, value) => {
  //   let volume = value
  //   let warning = "Listening to music at a high volume could cause long-term hearing loss."
  //   let index = alerts.indexOf(warning)

  //   if (volume > 80 && index === -1) {
  //     setAlerts([...alerts, warning])
  //   }
  //   if(volume < 80) {
  //     alerts.splice(index, 1)
  //     console.log("Volume Alerts:", alerts)
  //     setAlerts(alerts)
  //   }
  // };

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