import Casa from "./Casa";
import casas from "./datosCasas"

function ListasCasas(){
    return(
        <div>
            {casas.map((casa, index) => (
                <Casa
                key={index}
                ubicacion={casa.ubicacion}
                barrio={casa.barrio}
                valor={casa.valor}
                estado={casa.estado}
                imagen={casa.imagen}
                />
            ))}
        </div>
    )
}
export default ListasCasas;