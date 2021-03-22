import React, { useState } from 'react';
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
  const { alerts, setAlerts } = props
  const classes = useStyles();
  const [quality, setQuality] = useState('');

  const handleChange = (event) => {
    setQuality(event.target.value);
    if(event.target.value === "low"){
      setAlerts([...alerts, 'Music quality is degraded. Increase quality if your connection allows it.'])
    }
  };

  return (
    <div class='qualitySelector'>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Normal</InputLabel>
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