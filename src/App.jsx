import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Servise from './Pages/Servise';
import AddedCard from './Components/AddedCard'; 
import Cardlist from './Components/Cardlist';
import Savtcha from './Pages/Savtcha';
import Favorites from './Pages/Favorites';
import SingleCard from './Components/SingleCard';
import Footer from './Components/footer/Footer';
import Login from './Components/Login';

import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/home');
  };

  const isLoginPage = location.pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {isLoggedIn && !isLoginPage && <Navbar />}

      <div style={{ flex: 1, width: '100%' }}>
        <Routes>
          
          {isLoggedIn ? (
            
            <>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
            
              <Route path="/home" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/like" element={<Favorites />} /> 
              
              <Route path="/about" element={<About />} />    
              <Route path="/contact" element={<Contact />} />
              <Route path="/servise" element={<Servise />} />
              <Route path="/savtcha" element={<Savtcha />} />
              <Route path="/addedcard" element={<AddedCard />} />
              <Route path="/cardlist" element={<Cardlist />} />
              <Route path="/singlecard/:id" element={<SingleCard />} />
              
              <Route path="*" element={<Navigate to="/home" />} />

            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>

      {isLoggedIn && !isLoginPage && <Footer />}
    </div>
  );
}

export default App;