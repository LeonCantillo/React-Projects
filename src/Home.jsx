import reactLogo from './assets/react.svg'
import './styles/Home.css'

function Home() {
  const projects = [
    '01-twitter-follow-card',
    '02-triki-game',
    '03-mouse-follower',
    '04-dinamic-background'
  ]
  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" /> 
      <h1>React Projects</h1>
      <ul className='projects'>
        {
          projects.map(project => 
            (<li key={project}><a href={`/${project}`}>{project}</a></li>)
          )
        }
      </ul>
    </>
  )
}

export default Home
