import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import * as bootstrap from 'bootstrap'
import './index.css'
import Navbar from './components/Navbar'

import Rutas from './routers/Rutas'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <Navbar />

      <div className="container">
        <Rutas />
      </div>

    </BrowserRouter>
  </React.StrictMode>,
)
