import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useLocation} from 'react-router'
import ProductDetail from './pages/ProductDetail';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import Register from './pages/Register'
import UserInfo from './pages/UserInfo';
import Cart from './pages/Cart';
import NavbarCom from './components/Navbar';
import Favorite from './pages/Favorite';
import userStore from './store/userStore';
import { Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import ToastMessage from './components/ToastMessage';
import AdminProduct from './pages/AdminProduct';
import AdminOrderPage from './pages/AdminOrderPage';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentPage from './pages/PaymentPage';
import Sidebar from './components/Sidebar';
import uiStore from "./store/uiStore";

function App() {
  const { toastMessage } = uiStore()
  const location = useLocation()
  const {user, loginWithToken} = userStore()
  function PrivateRoute({Target}){  //PrivateRoute는 컴포넌트라서 태그나 컴포넌트를 리턴해야 된다.
    return (user)? <Target />: <Navigate to='/login' />
  }
  function PrivateRoute2({Target, permissionLevel}){  //PrivateRoute는 컴포넌트라서 태그나 컴포넌트를 리턴해야 된다.
    const isAuthenticated =
        user?.level ===permissionLevel || user?.level ==='admin'; 
    return isAuthenticated? <Target />: <Navigate to='/login' />
  }

  useEffect(()=>{ //async await 사용안한다.
    loginWithToken()
  },[])

  return (
    <div>
      <ToastMessage toastMessage={toastMessage} />
      {location.pathname.includes('admin')? 
        (
          <Routes>
            <Route path="/admin/product" element={<PrivateRoute2 Target={AdminProduct} permissionLevel="admin" />} />
            <Route path="/admin/order" element={<PrivateRoute2 Target={AdminOrderPage} permissionLevel="admin" />} />
          </Routes>
        )
        :(
          <>
            <NavbarCom />
            <Routes>
                <Route path='/' element={<ProductAll/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/product/:id' element={<ProductDetail />} />
                <Route path='/user' element={<PrivateRoute Target={UserInfo} />}/>
                <Route path='/payment' element={<PrivateRoute Target={PaymentPage} />}/>
                <Route path='/payment/success' element={<PrivateRoute Target={PaymentSuccess} />}/>
                <Route path='/cart' element={<PrivateRoute Target={Cart} />}/>
                <Route path='/favorite' element={<PrivateRoute Target={Favorite} />}/>
            </Routes>
          </>
        )
      } 
      {location.pathname.includes('admin') && (
        <Sidebar />
      )}
    </div>
  );
}

export default App;
