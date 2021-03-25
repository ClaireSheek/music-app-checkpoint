import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function StatusSwitch( props ) {
  const { alerts, setAlerts, isOnline, setIsOnline } = props

  const handleChange = (event) => {
    setIsOnline(!isOnline);
    let warning = "Your application is offline. You won't be able to share or stream music to other devices."
    let index = alerts.indexOf(warning)
    let newAlerts = alerts

    if (event.target.checked === false && index === -1) {
      setAlerts([...newAlerts, warning])
    } else if (index > -1) {
        newAlerts.splice(index, 1);
        setAlerts(newAlerts)
      }
  };
  

  return (
    <div>
      <Switch
        checked={isOnline}
        onChange={handleChange}
        name="online"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}