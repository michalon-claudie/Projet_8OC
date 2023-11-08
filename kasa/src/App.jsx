import './style/App.css';
import {Routes,Route} from "react-router-dom"
import Home from "./component/home";
import Banner from "./component/Banner"
import Footer from "./component/Footer"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Banner" element={<Banner/>} />
      <Route path="/Footer" element={<Footer/>} />
    </Routes>
  );
}

export default App;