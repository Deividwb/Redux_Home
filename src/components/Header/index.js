import './styles.css';
import React from "react";
import { Link } from "react-router-dom";
import PlaineImg from '../../assets/images/aviao-de-ar.png';

export default function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={PlaineImg} alt="logo" />
      </Link>

      <Link className='reserva' to="/reservas">
        <div>
          <strong>Minha reserva</strong>
          <span>3 reservas</span>
        </div>
      </Link>
    </header>
  );
}
