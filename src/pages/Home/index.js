import React, {useState, useEffect, useLayoutEffect} from "react";
import { useDispatch } from "react-redux";
import { addReserve } from "../../store/modules/reserve/actions";
import api from "../../services/api";
import {MdFlightTakeoff} from 'react-icons/md';
import './styles.css';

export default function Home() {
const dispatch = useDispatch();
const [trips,setTrips] = useState([]);

useEffect(()=>{

  async function loadApi(){

   
    const response = await api.get('trips');
    setTrips(response.data);    
  }  
  loadApi();
},[]);

function handleAdd(trip) {
  dispatch(addReserve(trip)); 
}

 return (
   <div>
       <div className="box">
         {trips.map(trip =>(

           <li key={trip.id}>
             <img src={trip.image} alt={trip.title} />
             <strong>{trip.title}</strong>
             <span className="status">Status:{trip.status? 'Disponivel' : 'Indisponivel'}</span>

             <button
             type="button"
             onClick={()=> handleAdd(trip)}
             >
               <div>
                 <MdFlightTakeoff size={16} color="#fff"/>
               </div>

             </button>
           </li>
         ))}
       </div>
   </div>
 );
}