import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpeg';
import '../styles/Home.css';

export const Home = () => {
  return (
  <div className="home">
    <div className="mainPage"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
    </div>
  );
};
