import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import '../styles/Home.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
