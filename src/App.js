import './App.css';
import React, { useState } from 'react'
import AppBar from './components/AppBar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);  

  const handleSubmit = () => {
    setLoggedIn(!loggedIn)
  }
  
  return (
    <div className="App">
      <AppBar />
      {!loggedIn ? (<Login handleSubmit={() => handleSubmit()}/>) : (<Dashboard />)}
    </div>
  );
}

export default App;
