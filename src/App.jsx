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
import MyProfile from './pages/Dashboard/MyProfile/MyProfile'
import MyOrders from './pages/Dashboard/MyOrders/MyOrders'
import CategoryItems from './pages/Home/Categories/CategoryItems'
import { CartProvider } from './pages/ContextReducer'
import { Toaster } from 'react-hot-toast'
import RequireAuth from './pages/Sign/RequireAuth'
import Whatsapp from './pages/Shared/Whatsapp'
import AdminSign from './pages/Sign/AdminSign'
import ProductsList from './pages/Admin/ProductsList/ProductsList'
import RequireAdmin from './pages/Sign/RequireAdmin'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddProduct from './pages/Admin/AddProduct/AddProduct'
import CategoriesList from './pages/Admin/CategoriesList/CategoriesList'
import AddCategory from './pages/Admin/AddCategory/AddCategory'
import AllOrders from './pages/Admin/AllOrders/AllOrders'
import AllCustomers from './pages/Admin/AllCustomers/AllCustomers'

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
          <Route path="sign/admin" element={<AdminSign />} />
          <Route path="cart" element={<Cart />} />
          <Route path='/:name' element={<CategoryItems></CategoryItems>}></Route>

          <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path='/dashboard/my_orders' element={<MyOrders></MyOrders>}></Route>
          </Route>
          <Route path='/admin_dashboard' element={<RequireAdmin><AdminDashboard></AdminDashboard></RequireAdmin>}>
            <Route index element={<ProductsList></ProductsList>}></Route>
            <Route path='/admin_dashboard/add_product' element={<AddProduct></AddProduct>}></Route>
            <Route path='/admin_dashboard/categories_list' element={<CategoriesList></CategoriesList>}></Route>
            <Route path='/admin_dashboard/add_category' element={<AddCategory></AddCategory>}></Route>
            <Route path='/admin_dashboard/all_orders' element={<AllOrders></AllOrders>}></Route>
            <Route path='/admin_dashboard/all_customers' element={<AllCustomers></AllCustomers>}></Route>
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
