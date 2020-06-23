import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Footer.css'



function Footer() {
  return (
    <div className="Footer">
     
      <p>Created with love using</p><img src={logo} className="App-logo" alt="logo" />
      <p>by <br/><strong> Muhammad Talha Umair Alim </strong></p>
    </div>
  );
}

export default Footer;
