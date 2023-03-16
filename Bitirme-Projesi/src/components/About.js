import React from 'react';
import BannerImage from '../assets/hakkimizda.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
        1996 yılında Türkiyede ilk şubesini Istanbul, Ulus'ta açan Domino's Pizza Türkiye olarak şu an,
        İstanbul, İzmir, Ankara ve Bursa başta olmak üzere 69 ile yayılmış 530 şubemiz ile Türkiye pizza
        endüstrisine öncülük ediyoruz. Dünyadaki 10.000. şubeyi Türkiye'de açmanın gururunu taşıyan
        Domino's Pizza Türkiye olarak, dünyada olduğu gibi Türkiye'de de en yaygın evlere servis pizza
        zinciri konumundayız. Domino's Pizza bugün dünyada 85 ülkede toplam 14 binden fazla şube işletiyor.
        </p>
      </div>
    </div>
  );
};
