import React, {useState}  from 'react'
import Typography from '@material-ui/core/Typography';
import OnlineMode from './cards/OnlineMode'
import MasterVolume from './cards/MasterVolume'
import SoundQuality from './cards/SoundQuality'
import SystemNotifications from './SystemNotifications';

const Dashboard = () => {
  const [notifications, setNotifications] = useState([])
  //   {
  //   onlineNotification: '',
  //   volumeNotification: '',
  //   qualityNotification: ''    
  // });


  return (
      <div className='authorizedDashboard'>
        <Typography variant="h1">
          Welcome User!
        </Typography>
        <div className="cards">
          <OnlineMode alerts={notifications} setAlerts={setNotifications}/>
          <MasterVolume alerts={notifications} setAlerts={setNotifications}/>
          <SoundQuality alerts={notifications} setAlerts={setNotifications}/>
        </div>
          <SystemNotifications alerts ={notifications}/>
      </div>
  )
}

export default Dashboard
