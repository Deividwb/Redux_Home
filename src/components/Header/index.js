import './styles.css';
import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import PlaineImg from '../../assets/images/aviao-de-ar.png';


export default function Header() {
  const reserveSize = useSelector(state=> state.reserve.length);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={PlaineImg} alt="logo" />
      </Link>

      <Link className='reserva' to="/reservas">
        <div>
          <strong>Minha reserva</strong>
          <span>{reserveSize}</span>
        </div>
      </Link>
    </header>
  );
}
