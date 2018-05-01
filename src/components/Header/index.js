import React from 'react';
import logo from '../../img/menu-logo.png';
// import Link from "react-router-dom/Link";
import './style.css';

export const Header = () => (
    <nav className="menu">
        <img src={logo} alt="sedona logo" className="logo"/>
        <ul className="menu-list">
            <li className="menu-item"><a href="#">Информация</a></li>
            <li className="menu-item"><a href="#">Фото и видео</a></li>
            <li className="menu-item"><a href="#">Карта штата</a></li>
            <li className="menu-item"><a href="#">Гостиницы</a></li>
        </ul>
    </nav>
);
