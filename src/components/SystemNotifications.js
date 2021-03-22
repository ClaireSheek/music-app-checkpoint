import React from 'react'

const SystemNotifications = (props) => {
  const { alerts } = props
  return (
    <div>
      <h2>System Notifications:</h2>
      {console.log(alerts)}
      <ol>
        {alerts.map((alert) => {
          return (
            <li>{alert}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default SystemNotifications
