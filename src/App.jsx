import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login/Login';
import { UserStorage } from './UseContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route path="/conta/*" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            } />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
