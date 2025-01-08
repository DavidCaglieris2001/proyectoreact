import React from "react";
import { Link } from "react-router-dom";
import './casa.css';

function Casa(props) {
  return (
    <div className="casa-container">
      <div className="casa-info">
        <h2>Localidad: {props.ubicacion}</h2>
        <p>Barrio: {props.barrio}</p>
        <p className="valor">Valor: {props.valor}</p>
        <p>Estado: {props.estado}</p>
      </div>
      <div className="casa-imagen">
        <img src={props.imagen} alt={props.barrio} />
      </div>
      <div className="casa-link">
        <Link to={`/detalleCasas/${props.id}`}>Ver casa</Link>
      </div>
    </div>
  );
}

export default Casa;