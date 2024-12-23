import About from './components/About'
import Contact from './components/Contact'
import Experiences from './components/Experiences'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <>
    <div className='overflow-x-hidden antialiased text-neutral-300 selection:text-gray-200 selection:bg-amber-200'>

      <div className='fixed w-full h-full -z-10 top-0'>
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>     
        </div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experiences/>
        <Projects/>
        <Contact/>

      </div>

    </div>
    
    </>
  )
}

export default App


