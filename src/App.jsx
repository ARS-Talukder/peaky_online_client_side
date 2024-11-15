import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Sign from './pages/Sign/Sign'
import Register from './pages/Sign/Register'
import Cart from './pages/Home/Products/Cart/Cart'
import Dashboard from './pages/Dashboard/Dashboard'
import MyProfile from './pages/Dashboard/MyProfile'
import MyOrders from './pages/Dashboard/MyOrders'
import CategoryItems from './pages/Home/Categories/CategoryItems'
import { CartProvider } from './pages/ContextReducer'

function App() {

  return (
    <div>
      <CartProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign" element={<Sign />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path='/:name' element={<CategoryItems></CategoryItems>}></Route>

          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='/dashboard/my_orders' element={<MyOrders></MyOrders>}></Route>
          </Route>
        </Routes>
        <Footer></Footer>
      </CartProvider>
    </div>
  )
}

export default App
