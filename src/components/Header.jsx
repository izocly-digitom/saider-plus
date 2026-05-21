import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const PROJECT_PATHS = [
  '/historique',
  '/projet',
  '/impact-structure',
  '/impact-modele',
  '/impact-duplication',
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isProjectActive = PROJECT_PATHS.includes(pathname);

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <img
            src="/assets/img/logo-blanc-saiderplus.png"
            alt="S'AIDER PLUS Village"
            className="brand-mark"
          />
        </Link>
        <nav className={`primary${open ? ' open' : ''}`} aria-label="Navigation principale">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Accueil
          </NavLink>
          <NavLink to="/vision" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Vision
          </NavLink>
          <div className="nav-group">
            <span className={`nav-trigger${isProjectActive ? ' active' : ''}`}>Le projet</span>
            <div className="submenu">
              <NavLink to="/historique" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Historique
              </NavLink>
              <NavLink to="/projet" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Le projet
              </NavLink>
              <NavLink to="/impact-structure" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Structure
              </NavLink>
              <NavLink to="/impact-modele" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Modèle à impact
              </NavLink>
              <NavLink to="/impact-duplication" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Territoires ultramarins
              </NavLink>
            </div>
          </div>
          <NavLink to="/village" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Le Village
          </NavLink>
          <NavLink to="/compagnon" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Compagnon
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Contact
          </NavLink>
        </nav>
        <Link to="/contact" className="btn" style={{ marginLeft: 12 }}>
          Nous rejoindre
        </Link>
        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
