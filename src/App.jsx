import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

export default function App() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

