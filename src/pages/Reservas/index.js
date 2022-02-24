import './styles.css';
import React from 'react';
import {MdDelete} from 'react-icons/md';

export default function Reservas() {
 return (
   <div>
       <h1 className='title'>Você Solicitou  2 reservas</h1>

       <div className='reservas'>
         <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/fernand-noronha.jpg"
          alt="Maceio"
          />
          <strong>Viagem Maceio 7 Dias</strong>
          <span>Quantidade: 2</span>
          <button type='button'
          onClick={()=>{}}
          >
            <MdDelete size={20} color="#191919"/>
          </button>
       </div>
       <footer>
         <button type='button'></button>
       </footer>
   </div>
 );
}