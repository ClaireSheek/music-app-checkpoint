import React, { useState }from 'react';
import Switch from '@material-ui/core/Switch';

export default function StatusSwitch( props ) {
  const { alerts, setAlerts } = props
  const [isOnline, setIsOnline] = useState(true);

  const handleChange = (event) => {
    setIsOnline(!isOnline);
    if (event.target.checked === false) {
      setAlerts([...alerts, "Your application is offline. You won't be able to share or stream music to other devices."])
      console.log(alerts)
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