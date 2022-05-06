import * as React from 'react';
import './Navbar.css'
import logo from '../logo.jpg';

export default function Navbar() {
  return (
    <div class="wrapper Navbar">
      <div class="sidebar">
        <div class="profile">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <a href="/" class="active">
              <span class="icon"><i class="fas fa-home"></i></span>
              <span class="item">Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="icon"><i class="fas fa-desktop"></i></span>
              <span class="item" a="Account">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="Account">
              <span class="icon"><i class="fas fa-user-friends"></i></span>
              <span class="item">Account</span>
            </a>
          </li>
          <li>
            <a href="Leads">
              <span class="icon"><i class="fas fa-tachometer-alt"></i></span>
              <span class="item">Leads</span>
            </a>
          </li>
          <li>
            <a href="Borrowers">
              <span class="icon"><i class="fas fa-database"></i></span>
              <span class="item">Borrower</span>
            </a>
          </li>
          <li>
            <a href="Resources">
              <span class="icon"><i class="fas fa-chart-line"></i></span>
              <span class="item">Resources</span>
            </a>
          </li>
          <li>
            <a href="Log-Out">
              <span class="icon"><i class="fas fa-user-shield"></i></span>
              <span class="item">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
