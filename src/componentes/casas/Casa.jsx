import { Link } from "react-router-dom";
import Boton from "../boton/Boton";


function Casa(props){


    return(
        <section className="seccion">
            <h2> Localidad: {props.ubicacion}</h2>
            <p>Estado: {props.estado}</p>
            <div className="casa-imagen">
            <img src={props.imagen} alt={props.barrio} /></div>

            <Boton text="Comprar" onClick={<Link to="/detalleCasas"></Link>}  />

        </section>
    )
}
export default Casa;