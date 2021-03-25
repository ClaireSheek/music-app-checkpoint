import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function QualityOption(props) {
  const { alerts, setAlerts, quality, setQuality } = props
  const classes = useStyles();


  const handleChange = (event) => {
    setQuality(event.target.value);
    let warning = "Music quality is degraded. Increase quality if your connection allows it."
    let index = alerts.indexOf(warning)

    let newAlerts = alerts

    if (event.target.value === 'low' && index === -1) {
      setAlerts([...newAlerts, warning])
    } else if (index > -1) {
        newAlerts.splice(index, 1);
        setAlerts(newAlerts)
    }
  };

  return (
    <div class='qualitySelector'>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          onChange={handleChange}
        >
          <MenuItem value={'low'}>Low</MenuItem>
          <MenuItem value={'normal'}>Normal</MenuItem>
          <MenuItem value={'high'}>High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}