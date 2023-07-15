import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h3 className='text-center text-3xl'>Hello world</h3>
      
      <div className='text-center'>
        <Header />
        <Outlet/>
      </div>
    </div>
  )
}

export default App
