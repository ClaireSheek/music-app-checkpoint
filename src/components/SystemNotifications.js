import React from 'react'

const SystemNotifications = (props) => {
  // const { alerts } = props
  return (
    <div>
      <h2>System Notifications:</h2>
      {/* {console.log("current Notifications", props.alerts)} */}
      <ol>
        {props.alerts.map((alert, index) => {
          return (
            <li key={index}>{alert}</li>
          )
        })}
      </ol>
    </div>
  )
}

export default SystemNotifications
