import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Sign from './pages/Sign/Sign'
import Register from './pages/Sign/Register'
import Cart from './pages/Home/Products/Cart/Cart'

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="sign" element={<Sign />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
