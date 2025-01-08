import React from 'react';
import { useParams } from 'react-router-dom';
import casas from './datosCasas';
import './DetalleCasa.css';

function DetalleCasa() {
  const { id } = useParams();
  const casa = casas.find(casa => casa.id === id);

  if (!casa) {
    return <h2>Casa no encontrada</h2>;
  }

  return (
    <div className="detalle-casa">
      <h2>Detalles de la Casa</h2>
      <p><strong>Localidad:</strong> {casa.ubicacion}</p>
      <p><strong>Barrio:</strong> {casa.barrio}</p>
      <p><strong>Valor:</strong> {casa.valor}</p>
      <p><strong>Estado:</strong> {casa.estado}</p>
      <div className="casa-imagen">
        <img src={casa.imagen} alt={casa.barrio} />
      </div>
    </div>
  );
}

export default DetalleCasa;