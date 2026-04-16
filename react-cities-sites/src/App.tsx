
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import EventScreen from './pages/EventScreen'
import Home from './pages/HomeScreen'
import BusinessScreen from './pages/Business'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<EventScreen />} />
        <Route path="/business" element={<BusinessScreen />} />

        <Route path="project/:id" element={<EventScreen />} />
        {/* <Route path="dashboard" element={<Home />}>
          <Route index element={<RecentActivity />} />
          <Route path="project/:id" element={<Project />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
