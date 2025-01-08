import React, { useState } from 'react';
import './register.css';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'Nombre es requerido';
        if (!formData.lastName) newErrors.lastName = 'Apellido es requerido';
        if (!formData.email) newErrors.email = 'Email es requerido';
        if (!formData.password) newErrors.password = 'Contraseña es requerida';
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Las contraseñas no coinciden';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Nombre:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    aria-describedby="errorFirstName"
                />
                <div id="errorFirstName" className="error">
                    {errors.firstName}
                </div>

                <label htmlFor="lastName">Apellido:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    aria-describedby="errorLastName"
                />
                <div id="errorLastName" className="error">
                    {errors.lastName}
                </div>

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-describedby="errorEmail"
                />
                <div id="errorEmail" className="error">
                    {errors.email}
                </div>

                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    aria-describedby="errorPassword"
                />
                <div id="errorPassword" className="error">
                    {errors.password}
                </div>

                <label htmlFor="confirmPassword">Repita Contraseña:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    aria-describedby="errorConfirmPassword"
                />
                <div id="errorConfirmPassword" className="error">
                    {errors.confirmPassword}
                </div>

                <button type="submit" to="/login">Register</button>
            </form>
        </div>
    );
}

export default Register;