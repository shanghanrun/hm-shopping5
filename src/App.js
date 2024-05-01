import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
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

function App() {
  const {user} = userStore()
  function PrivateRoute({Target}){  //PrivateRoute는 컴포넌트라서 태그나 컴포넌트를 리턴해야 된다.
    return (user)? <Target />: <Navigate to='/login' />
  }
  return (
    <div>
      <NavbarCom />
      <Routes>
        <Route path='/' element={<ProductAll/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/product/:id' element={<PrivateRoute Target={ProductDetail} />} />
        <Route path='/user' element={<PrivateRoute Target={UserInfo} />}/>
        <Route path='/cart' element={<PrivateRoute Target={Cart} />}/>
        <Route path='/favorite' element={<PrivateRoute Target={Favorite} />}/>
      </Routes>
    </div>
  );
}

export default App;
