import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import GoBack from '../GoBack'
import '../styles/Home.css'
// Projects components
import Project_01 from '../projects/01-twitter-follow-card/main'
import Project_02 from '../projects/02-triki-game/main'
import Project_03 from '../projects/03-mouse-follower/main'
import Project_04 from '../projects/04-dinamic-background/main'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/01-twitter-follow-card' element={<><GoBack/><Project_01 /></>} />
          <Route exact path='/02-triki-game' element={<><GoBack/><Project_02 /></>} />
          <Route exact path='/03-mouse-follower' element={<><GoBack/><Project_03 /></>} />
          <Route exact path='/04-dinamic-background' element={<><Project_04 /><GoBack/></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App