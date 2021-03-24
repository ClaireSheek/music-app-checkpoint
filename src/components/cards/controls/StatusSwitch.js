import React, { useState }from 'react';
import Switch from '@material-ui/core/Switch';

export default function StatusSwitch( props ) {
  const { alerts, setAlerts } = props
  const [isOnline, setIsOnline] = useState(true);

//With useEffect
  // const warning = "Your application is offline. You won't be able to share or stream music to other devices."
  // const index = alerts.indexOf(warning)

  // useEffect(() => {
  //   if (isOnline === false && index === -1) {
  //     setAlerts([...alerts, warning])
  //   } 
  //   if (index > -1) {
  //     let newAlerts = alerts
  //     newAlerts.splice(index, 1);
  //     console.log("Status Alerts:", newAlerts)
  //     setAlerts(newAlerts)
  //   }
  // })

  //   const handleChange = (event) => {
  //   setIsOnline(!isOnline)
  //   }

  //Without useEffect
  const handleChange = (event) => {
    setIsOnline(!isOnline);
    let warning = "Your application is offline. You won't be able to share or stream music to other devices."
    let index = alerts.indexOf(warning)

    let newAlerts = alerts

    if (event.target.checked === false && index === -1) {
      setAlerts([...newAlerts, warning])
    } else {
        if (index > -1) {
          newAlerts.splice(index, 1);
          console.log("Status Alerts:", newAlerts)
          setAlerts(newAlerts)
      }
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