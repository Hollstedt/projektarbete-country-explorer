import { Route, Routes } from 'react-router-dom'
import './App.css'
import Startpage from './pages/Startpage'
import Countries from './pages/Countries'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Startpage />}></Route>
      <Route path="/countries" element={<Countries />}></Route>
    </Routes>
  )
}

export default App
