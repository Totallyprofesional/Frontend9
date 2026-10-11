import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Carrito from './components/Carrito';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './estilos.css';
import productosData from './data/productos.json';

function App() {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [carrito, setCarrito] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mostrarCatalogo, setMostrarCatalogo] = useState(true);
    const [seccionActiva, setSeccionActiva] = useState('inicio'); // 'inicio' | 'productos' | 'contacto'

    useEffect(() => {
        setProductos(productosData);
        setCargando(false);
    }, []);

    const agregarAlCarrito = (producto) => {
        const yaEsta = carrito.some(item => item.id === producto.id);
        if (!yaEsta) {
            setCarrito([...carrito, producto]);
        }
    };

    const eliminarDelCarrito = (index) => {
        const nuevoCarrito = carrito.filter((_, i) => i !== index);
        setCarrito(nuevoCarrito);
    };

    const idsEnCarrito = carrito.map(item => item.id);

    const productosFiltrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const manejarNavegacion = (seccion) => {
        setSeccionActiva(seccion);
    };

    return (
        <>
            <Navbar onNavegar={manejarNavegacion} />

            <div className="container mt-4">
                {/* SECCIÓN INICIO */}
                {seccionActiva === 'inicio' && (
                    <header className="bg-dark text-white text-center py-5 rounded mb-4">
                        <h1>GS Games - Tienda Oficial</h1>
                        <p className="lead">Tu tienda de confianza en videojuegos y consolas</p>
                        <button
                            className="btn btn-outline-light mt-3"
                            onClick={() => setSeccionActiva('productos')}
                        >
                            Ver catálogo
                        </button>
                    </header>
                )}

                {/* SECCIÓN PRODUCTOS */}
                {seccionActiva === 'productos' && (
                    <>
                        <section className="mb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar producto por nombre..."
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                            />
                        </section>

                        <Carrito carrito={carrito} onEliminar={eliminarDelCarrito} />

                        <div className="mb-3 text-center">
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() => setMostrarCatalogo(!mostrarCatalogo)}
                            >
                                {mostrarCatalogo ? 'Ocultar catálogo' : 'Mostrar catálogo'}
                            </button>
                        </div>

                        {mostrarCatalogo && (
                            <main>
                                <h2 className="mb-4 text-center">Catálogo de Productos</h2>

                                {cargando ? (
                                    <p className="text-center">Cargando productos...</p>
                                ) : (
                                    <ProductList
                                        productos={productosFiltrados}
                                        idsEnCarrito={idsEnCarrito}
                                        onAgregar={agregarAlCarrito}
                                    />
                                )}
                            </main>
                        )}
                    </>
                )}

                {/* SECCIÓN CONTACTO */}
                {seccionActiva === 'contacto' && (
                    <Contacto />
                )}
            </div>

            <Footer />
        </>
    );
}    

export default App;