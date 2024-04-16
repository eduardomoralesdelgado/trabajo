import { NavLink } from "react-router-dom";

export const NavBarApp = () => {
  return (
    <nav style={navStyle} className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink to='/' style={brandStyle} className="navbar-brand">Perfil</NavLink>
        <button style={togglerStyle} className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact to='/' style={linkStyle} className="nav-link" activeClassName="active">Inicio</NavLink>
            <NavLink to='/contacto' style={linkStyle} className="nav-link" activeClassName="active">Contacto</NavLink>
            <NavLink to='/formacion' style={linkStyle} className="nav-link" activeClassName="active">Formación</NavLink>
            <NavLink to='/experiencia' style={linkStyle} className="nav-link" activeClassName="active">Experiencia</NavLink>
            <NavLink to='/portafolio' style={linkStyle} className="nav-link" activeClassName="active">Portafolio</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: '#2d2d2d',
};

const brandStyle = {
  color: '#fff',
  fontWeight: 'bold',
};

const togglerStyle = {
  border: 'none',
  backgroundColor: 'transparent',
  color: '#fff',
};

const linkStyle = {
  color: '#fff',
  margin: '0 10px',
  textDecoration: 'none',
};

