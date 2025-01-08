import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ name: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        let formErrors = { name: '', password: '' };

        if (!name) {
            formErrors.name = 'Nombre es requerido';
        }

        if (!password) {
            formErrors.password = 'Contraseña es requerida';
        }

        setErrors(formErrors);

        if (!formErrors.name && !formErrors.password) {
            // Handle form submission
            console.log('Form submitted:', { name, password });
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre" id="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-describedby="errorNombre"
                />
                <div id="errorNombre" className="error">
                    {errors.name}
                </div>

                <label htmlFor="contraseña" id="contraseña">Contraseña:</label>
                <input
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-describedby="errorContraseña"
                />
                <div id="errorContraseña" className="error">
                    {errors.password}
                </div>
                
                <Link to="/register">No tienes cuenta? REGISTRATE</Link>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;