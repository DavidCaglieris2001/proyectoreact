import './secction.css';
import casafoto from '../../assets/img/casaxd.png'

function Secction() {
    return (
        <section className="seccion">
            <p>Encuentra aquí los mejores precios y viviendas de la localidad que prefieras</p>
            <div className='contenedor-img'>
                <img src={casafoto} alt="Casa" />
            </div>
        </section>
    );
}

export default Secction;