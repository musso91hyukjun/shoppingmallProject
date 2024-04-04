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

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/member/modify" element={<ModifyProfile />} />
          <Route path="/order" element={<Order />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mileage" element={<Mileage />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
