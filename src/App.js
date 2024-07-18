
import './App.css';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Basket from './pages/Basket';
import ShopPage from './pages/ShopPage';


function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col overflow-x-hidden relative">
      <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
       <Route path='/basket' element={<Basket />} />
       <Route path='/shop/:category' element={<ShopPage />} />
       <Route path='/shop/:category/sub/:subCategory' element={<ShopPage />} />
      
     </Routes>
     
      
    </div>
  );
}

export default App;
