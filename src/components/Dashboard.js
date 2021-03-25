import React, {useState }  from 'react'
import Typography from '@material-ui/core/Typography';
import SystemNotifications from './SystemNotifications';
import Cards from './cards/Cards'
import StatusSwitch from './cards/controls/StatusSwitch'
import VolumeSlider from './cards/controls/VolumeSlider'
import QualityOption from './cards/controls/QualityOption'

const Dashboard = () => {
  const [notifications, setNotifications] = useState([])
  const [isOnline, setIsOnline] = useState(true);
  const [quality, setQuality] = useState('');
  const [volume, setVolume] = useState()


  return (
      <div className='authorizedDashboard'>
        <Typography variant="h1">
          Welcome User!
        </Typography>
        {/* <Cards alerts={notifications} setAlerts={setNotifications}/> */}
        <div className="cards">
          <Cards className="card"
            title='Online Mode' 
            body='Is this application connected to the internet?'>
            <StatusSwitch alerts={notifications} setAlerts={setNotifications} isOnline={isOnline} setIsOnline={setIsOnline}/>
          </Cards>
          <Cards className="card"
            title='Master Volume' 
            body='Overrides all other sound settings in this application'>
            <VolumeSlider alerts={notifications} setAlerts={setNotifications} volume={volume} setVolume={setVolume}/>
          </Cards>
          <Cards className="card soundCard"
            title='Sound Quality' 
            body='Maunally control the music quality in event of poor connection'>
            <QualityOption alerts={notifications} setAlerts={setNotifications} quality={quality} setQuality={setQuality}/>
          </Cards>
        </div>
        <SystemNotifications alerts ={notifications}/>
      </div>
  )
}

export default Dashboard
