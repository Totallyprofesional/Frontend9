import React from 'react';

// Gestion carrito
const Carrito = ({ carrito, onEliminar }) => {
    // Total carrito
    const total = carrito.reduce((suma, item) => suma + item.precio, 0);

    return (
        <section className="card p-3 mb-4 bg-light">
            <h4>Carrito de Compras</h4>
            <p className="mb-1">
                Total de productos: <strong>{carrito.length}</strong> | Monto Total: <strong>${total}</strong>
            </p>

            {/* Mensaje de stock para carrito */}
            {carrito.length === 0 ? (
                <p className="text-muted mb-0">El carrito está vacío.</p>
            ) : (
                <ul className="list-group mt-2">
                    {carrito.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {item.nombre} - ${item.precio}
                            <button className="btn btn-danger btn-sm" onClick={() => onEliminar(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Carrito;
