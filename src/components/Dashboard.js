import React, {useState}  from 'react'
import Typography from '@material-ui/core/Typography';
import SystemNotifications from './SystemNotifications';
import Cards from './cards/Cards'

const Dashboard = () => {
  const [notifications, setNotifications] = useState([])

  return (
      <div className='authorizedDashboard'>
        <Typography variant="h1">
          Welcome User!
        </Typography>
        <Cards alerts={notifications} setAlerts={setNotifications}/>
        <SystemNotifications alerts ={notifications}/>
      </div>
  )
}

export default Dashboard
