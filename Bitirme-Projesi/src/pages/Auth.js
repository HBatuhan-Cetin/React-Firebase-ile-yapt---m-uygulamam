import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../firebase'
import '../styles/pages/Auth.css'
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const Auth = () => {
  const [signUp, setSignUp]=useState(true)
  const [authData, setAuthData] = useState({email:'', password:''})
  const onChaneFunc = (e) => {
    setAuthData({...authData, [e.target.name] : e.target.value})
  }
  const authFunc = async() =>{
    if(signUp){
       try {
        const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
        const user = data.user;
        if(user){
          window.location = "/dashboard"
        }
       }catch (error) {
        toast.error(error.message)
       }
    }else{
      try {
        const data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
        const user = data.user;
        if(user){
          window.location = "/dashboard"
        }
       }catch (error) {
        toast.error(error.message)
       }
    }
  }
  const googleLogin = async() => {
    try{
      const data = await signInWithPopup(auth, provider)
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential.accessToken;
      const user = data.user;
      if(user){
        window.location ="/dashboard"
      }
    } catch (error){
      const credential = GoogleAuthProvider.credentialFromError(error);
      toast.error(credential)
    }
  }
  return (
    <div className='auth'>
      <div className='auth-container'>
        <h2>{signUp ? "Kayıt" : "Giriş"}</h2>
        <input name='email' value={authData.email} onChange={onChaneFunc} type="email" placeholder='Email'/>
        <input name='password' value={authData.password} onChange={onChaneFunc} type="password" placeholder='Password'/>
        <p onClick={() => setSignUp(!signUp)}>{signUp ? "Zaten bir hesabınız mı var?" : "Kayıt olmak mı istiyorsun?"}</p>
        <div onClick={authFunc} className='auth-container-button'>{signUp ? "Kayıt Ol" : "Giriş Yap"}</div>
        <div onClick={googleLogin} className='auth-container-google'>Google İle Giriş Yapmak İçin</div>
      </div>
    </div>
  )
}
