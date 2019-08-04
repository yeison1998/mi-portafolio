import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <a className="nav-link  nav-item active" href="#main">Acerca de mi </a>
                        <a className="nav-link nav-item active" href="#skills">Habilidades</a>
                        <a className="nav-link nav-item active" href="#estudios">Estudios</a>
                        <a className="nav-link nav-item active" href="#experiencia">Experiencia</a>
                        <a className="nav-link nav-item active" href="#hobbies">Hobbies</a>
                        <a className="nav-link nav-item active" href="#contacto">Contacto</a>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Menu;