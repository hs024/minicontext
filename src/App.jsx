import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  return (
    <>
<UserContextProvider>
  <h1>hi hello</h1>
<Login></Login>
<Profile></Profile>
</UserContextProvider>
    </>
  )
}

export default App
