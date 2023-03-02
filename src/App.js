import { Routes, Route } from 'react-router-dom';
import Home from './components/homeWrapper/homeComponent/Home';
import Dashboard from './components/dashboardWrapper/Dashboard';
import About from './components/aboutWrapper/About';
import Gallery from './components/galleryWrapper/Gallery';
import Service from './components/servicesWrapper/Service';
import Venue from './components/venuesWrapper/Venue';
import SignUp from './components/signupWrapper/SignUp';
import { userContext } from './components/global/userContext';
import { useEffect, useState } from 'react';

function App() {

  const localDetail = localStorage.getItem("user");

  const [user, setUser] = useState({});

  const setLogin = (user) => {
    setUser({
      isLogin: true,
      data: user
    });
  }

  useEffect(() => {
    console.log("hello")
    let isLogin;
    if (localDetail) {
      isLogin = true;
    } else {
      isLogin = false;
    }
    setUser({
      isLogin: isLogin,
      data: localDetail
    });
  }, []);

  return (
    <div className="App">
      <userContext.Provider value={{ user, setLogin }}>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/services" element={<Service />} />
          <Route exact path="/venues" element={<Venue />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
