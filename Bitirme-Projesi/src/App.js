import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import  {Navbar}  from "./components/Navbar";
import  {Auth} from "./pages/Auth";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';


function App() {
  const [users,setUsers]= useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        setUsers(user)
        
      } else {

      }
    });
  },[])
  return (
    <div >
<BrowserRouter>
 {users?.accessToken && <Navbar/>}
  <Routes>
    <Route path="/" element={<Auth/>}/>
    <Route path="dashboard/*" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/menu" exact element={<Menu />} />
    <Route path="/about" exact element={<About />} />
    <Route path="/contact" exact element={<Contact />} />
  </Routes>
  {users?.accessToken && <Footer/>}
</BrowserRouter>
<ToastContainer
  position="top-right"
  autoClose={4000}
  theme="light"
/>
    </div>
  );
}

export default App;
