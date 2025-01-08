import "./Menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li> <Link to="/">Inicio</Link> </li>
                <li> <Link to="/casas">Casas</Link> </li>
                <li> <Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;