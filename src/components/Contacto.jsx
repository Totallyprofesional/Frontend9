import React, { useState } from 'react';

const Contacto = () => {
    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
        // Limpiar error al escribir
        if (errores[name]) {
            setErrores({ ...errores, [name]: '' });
        }
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!formulario.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es obligatorio';
        }

        if (!formulario.email.trim()) {
            nuevosErrores.email = 'El email es obligatorio';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
            nuevosErrores.email = 'El email no es válido';
        }

        if (!formulario.mensaje.trim()) {
            nuevosErrores.mensaje = 'El mensaje es obligatorio';
        } else if (formulario.mensaje.trim().length < 10) {
            nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validar()) {
            console.log('Formulario enviado:', formulario);
            setEnviado(true);
            setFormulario({ nombre: '', email: '', mensaje: '' });

            // Ocultar mensaje de éxito después de 3 segundos
            setTimeout(() => setEnviado(false), 3000);
        }
    };

    return (
        <section className="mb-5">
            <h2 className="mb-4 text-center">Contacto</h2>

            {enviado && (
                <div className="alert alert-success text-center">
                    ¡Mensaje enviado correctamente! Te responderemos pronto.
                </div>
            )}

            <form onSubmit={handleSubmit} className="card p-4 shadow-sm" noValidate>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                        id="nombre"
                        name="nombre"
                        value={formulario.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                    />
                    {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errores.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formulario.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                    />
                    {errores.email && <div className="invalid-feedback">{errores.email}</div>}
                </div>

                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea
                        className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
                        id="mensaje"
                        name="mensaje"
                        rows="4"
                        value={formulario.mensaje}
                        onChange={handleChange}
                        placeholder="Escribí tu mensaje..."
                    ></textarea>
                    {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Enviar mensaje
                </button>
            </form>
        </section>
    );
};

export default Contacto;