import Header from './components/Header'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import About from './components/About'

function App() {
  return (
    <>
      <Header/>
      <div className="main_section">
        <Hobbies/>
        <Skills/>
        <About/>
      </div>
    </>
  )
}

export default App
