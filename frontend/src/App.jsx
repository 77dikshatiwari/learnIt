import './App.css'
import Footer from './components/Footer.jsx'
// import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'



function App() {
  
  return (
    <>
    <div>  
    <Navbar/>
        <main>
        {/* <Home /> */}
          <Outlet />
        </main>
        <Footer />
    </div>
    </>
  )
}

export default App
