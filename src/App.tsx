import Header from './components/Header'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import About from './components/About'
import BackgroundDecoration from './components/BackgroundDecoration'

function App() {
  return (
    <>
      <Header/>
      <div className="main_section">
        <div className="cards_section">
          <Hobbies/>
          <Skills/>
          <About/>
        </div>
        <BackgroundDecoration/>
      </div>
    </>
  )
}

export default App
