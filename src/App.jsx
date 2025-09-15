import { Route, Routes } from 'react-router-dom'
import './App.css'
import Startpage from './pages/Startpage'
import Countries from './pages/Countries'
import Collection from './pages/Collection'
import CountryData from './pages/CountryData'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Startpage />}></Route>
      <Route path="/countries" element={<Countries />}></Route>
      <Route path="/collection" element={<Collection />}></Route>
      <Route path="/countries/:countryName" element={<CountryData />}></Route>
    </Routes>
  )
}

export default App