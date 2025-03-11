import Contact from "./components/Contact/contact"
import Hero from "./components/Hero/hero/"
import Services from "./components/Services/services"
import Portfolio from "./component/Portfolio/portfolio"


const App = () => {
  return (
    <div className=''>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App