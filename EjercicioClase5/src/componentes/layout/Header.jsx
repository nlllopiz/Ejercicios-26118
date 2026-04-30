function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">MiShop</a>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Carrito</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;