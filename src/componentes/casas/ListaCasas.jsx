import React from 'react';
import Casa from './Casa';
import casas from './datosCasas';

function ListaCasas() {
  return (
    <div>
      {casas.map((casa) => (
        <Casa
          key={casa.id}
          id={casa.id}
          ubicacion={casa.ubicacion}
          barrio={casa.barrio}
          valor={casa.valor}
          estado={casa.estado}
          imagen={casa.imagen}
        />
      ))}
    </div>
  );
}

export default ListaCasas;