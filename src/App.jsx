import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'


function App() {

  return (
    <>
      <Navbar/>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-green-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Manager/>
      <Footer/>
    </>
  )
}

export default App
