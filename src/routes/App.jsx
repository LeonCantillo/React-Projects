import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import GoBack from '../goBack'
import '../styles/Home.css'
// Projects components
import Project_01 from '../projects/01-twitter-follow-card/main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/01-twitter-follow-card' element={<><GoBack/><Project_01 /></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App