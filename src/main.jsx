import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Sobre from './Components/Sobre/index.jsx'
import "./App.css"

const routes = createBrowserRouter([
  {
    element: <App></App>,
    path: "/login",
  },
  {
    element: <Sobre />,
    path: "/Sobre"
  }
  ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App'>
    <RouterProvider router={routes}>
    
    </RouterProvider>
    
    </div>
  </React.StrictMode>,
)
