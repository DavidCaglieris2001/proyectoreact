
function detalleCasas(props){

    return(
        <section className="seccion">
            <h2> Localidad: {props.ubicacion}</h2>
            <p> Barrio: {props.barrio}</p>
            <p> Precio: {props.valor}$</p>
            <p>Estado: {props.estado}</p>
            <div className="casa-imagen">
            <img src={props.imagen} alt={props.barrio} /></div>

        </section>
    )
}

export default detalleCasas;