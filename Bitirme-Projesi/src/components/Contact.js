import React from 'react';
import iletişimfoto from '../assets/iletişimfoto.jpg';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${iletişimfoto})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            pattern="[A-Za-z]*"
            name="name"
            placeholder="Lütfen adınızı soyadınızı giriniz."
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen mail adresinizi giriniz."
          />
          <label>Mesajınız</label>
          <textarea
            rows="5"
            name="message"
            placeholder="Lütfen mesajınızı giriniz."
            ></textarea>

		        <button>İletişime Geç</button>
           
        </form>
      </div>
    </div>
  );
};
