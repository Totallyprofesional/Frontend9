import React from 'react';

// Recibir datos de productos de carrito
const ProductList = ({ productos, idsEnCarrito, onAgregar }) => {
    return (
        <div className="row">
            {/* Renderizado para mensaje de stock */}
            {productos.length === 0 ? (
                <p className="text-center text-muted">No se encontraron productos coincidentes.</p>
            ) : (
                productos.map(producto => {
                    // true si este producto ya fue agregado al carrito
                    const yaEnCarrito = idsEnCarrito.includes(producto.id);

                    return (
                        <div className="col-md-4 mb-4" key={producto.id}>
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={producto.imagen}
                                    className="card-img-top"
                                    alt={producto.nombre}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-text text-muted">{producto.descripcion}</p>
                                        <p className="card-text fw-bold text-primary">${producto.precio}</p>
                                    </div>
                                    {/* Renderizado para cambio de texto por existencia en el carrito */}
                                    <button
                                        className={`btn mt-2 ${yaEnCarrito ? 'btn-success' : 'btn-primary'}`}
                                        onClick={() => onAgregar(producto)}
                                        disabled={yaEnCarrito}
                                    >
                                        {yaEnCarrito ? 'En el carrito' : 'Agregar al Carrito'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default ProductList;
