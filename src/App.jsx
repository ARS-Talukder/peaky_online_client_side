import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Header from './pages/Shared/Header/Header'
import Footer from './pages/Shared/Footer/Footer'
import Sign from './pages/Sign/Sign'
import Register from './pages/Sign/Register'
import Cart from './pages/Home/Products/Cart/Cart'
import CategoryItems from './pages/Home/Categories/CategoryItems'
import { CartProvider } from './pages/ContextReducer'
import { Toaster } from 'react-hot-toast'
import Whatsapp from './pages/Shared/Whatsapp'
import ProductsList from './pages/Dashboard/Admin/ProductsList/ProductsList'
import ProductDetails from './pages/Home/Products/ProductDetails/ProductDetails'
import Dashboard from './pages/Dashboard/Dashboard'
import RequireAuth from './pages/Sign/RequireAuth'
import AddProduct from './pages/Dashboard/Admin/AddProduct/AddProduct'
import AddCategory from './pages/Dashboard/Admin/AddCategory/AddCategory'
import AllCustomers from './pages/Dashboard/Admin/AllCustomers/AllCustomers'
import AllOrders from './pages/Dashboard/Admin/AllOrders/AllOrders'
import CategoriesList from './pages/Dashboard/Admin/CategoriesList/CategoriesList'
import Index from './pages/Dashboard/Index'
import OrderTrack from './pages/Dashboard/OrderTrack/OrderTrack'
import RequireAdmin from './pages/Sign/RequireAdmin'

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
          <Route path='/product/:id' element={<ProductDetails></ProductDetails>}></Route>

          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<Index></Index>}></Route>
            <Route path='/dashboard/order_track' element={<OrderTrack></OrderTrack>}></Route>
            <Route path='/dashboard/products_list' element={<RequireAdmin><ProductsList></ProductsList></RequireAdmin>}></Route>
            <Route path='/dashboard/add_product' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path='/dashboard/categories_list' element={<RequireAdmin><CategoriesList></CategoriesList></RequireAdmin>}></Route>
            <Route path='/dashboard/add_category' element={<RequireAdmin><AddCategory></AddCategory></RequireAdmin>}></Route>
            <Route path='/dashboard/all_orders' element={<RequireAdmin><AllOrders></AllOrders></RequireAdmin>}></Route>
            <Route path='/dashboard/all_customers' element={<RequireAdmin><AllCustomers></AllCustomers></RequireAdmin>}></Route>
          </Route>
        </Routes>
        <Whatsapp></Whatsapp>
        <Footer></Footer>
        <Toaster />
      </CartProvider>
    </div>
  )
}

export default App
