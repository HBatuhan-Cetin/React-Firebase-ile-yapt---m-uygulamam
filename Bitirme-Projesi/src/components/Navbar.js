import { signOut } from 'firebase/auth'
import React from 'react'
import { toast } from 'react-toastify'
import { auth } from '../firebase'
import '../styles/components/Navbar.css'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const logoutFunc = async() =>{
    toast.success('Çıkış işlemi gerçekleştiriliyor...')
    await signOut(auth)
    setTimeout(() => {
      window.location="/"
    }, 3000);
  }
  return (
    <div className='navbar'>
       <img src={logo} alt="" />
      <div className='navbar-left'>Domino's Pizza</div>
      <div className="mainLink">
          <Link to="/home">Anasayfa</Link>
          <Link to="/menu">Ürünlerimiz</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      <div onClick={logoutFunc} className='navbar-right'>Çıkış</div>
    </div>
  )
}
