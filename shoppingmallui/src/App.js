import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import './css/basis.css'


import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Mypage from './component/Mypage';
import Mileage from './component/Mileage';
import Signup from './component/Signup';
import Order from './component/Order';
import ModifyProfile from './component/ModifyProfile';
import Item from './component/Item';
import QnA from './component/QnA';
import Cart from './component/Cart';
import QnAWrite from './component/QnAWrite';
import AuthRoute from './api/AuthRoute';
import { setInterceptores } from './api/HttpRequestInterceptor';
import { AuthProvider } from './api/AuthContext';

setInterceptores();

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AuthProvider>
          <Header />

        </AuthProvider>
        <Routes>
          <Route path="/member/modify" element={<ModifyProfile />} />
          <Route path="/mypage/order" element={<Order />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage/mileage" element={<Mileage />} />
          <Route path="/mypage" element={
            <AuthRoute>
              <Mypage />
            </AuthRoute>
          } />
          <Route path="/" element={<Item />} />
          <Route path="/login" element={<Login />} />
          <Route path="/qna" element={<QnA />} />
          <Route path='/qnaWrite' element={<QnAWrite />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
