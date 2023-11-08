import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from "../pages/home"
import Banner from "../component/Banner"
import Footer from "../component/Footer"

function Router() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Banner" element={<Banner/>} />
        <Route path="/Footer" element={<Footer/>} />
      </Routes>
    </BrowserRouter>
    );
  }
  
  export default Router;