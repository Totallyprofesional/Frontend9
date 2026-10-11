import React from 'react';

const Navbar = ({ onNavegar }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#" onClick={(e) => { e.preventDefault(); onNavegar('inicio'); }}>
                    GS Games
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavegar('inicio'); }}>
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavegar('productos'); }}>
                                Productos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onNavegar('contacto'); }}>
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;