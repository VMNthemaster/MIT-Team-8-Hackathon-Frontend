import './App.css'
import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './components/HomePage'
import ShowCharts from './components/ShowCharts'
import ExchangeRate from './components/ExchangeRate'


function App() {
  return (
    <React.Fragment>
      <main>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/graphs' element={<ShowCharts />} />
            <Route path='/exchangerates' element={<ExchangeRate />} />
          </Routes>
        </Router>
      </main>
    </React.Fragment>
  )
}

export default App
