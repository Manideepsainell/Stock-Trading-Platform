import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './SignUp/AuthContext';

function Navbar() {
  const { user, logout, flash } = useContext(AuthContext);

  return (
    <>
      {/* Flash Message */}
      {flash && (
        <div style={{
          position: "fixed",
          top: "15px",
          left: "20px",
          background: "rgba(33, 150, 243, 0.35)",
          color: "#ffffff",
          padding: "16px 36px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          fontSize: "15px",
          fontWeight: "500",
          zIndex: 1050,
          minWidth: "480px",
          textAlign: "left",
          letterSpacing: "0.2px",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(255,255,255,0.15)"
        }}>
          {flash}
        </div>
      )}

      <nav className="navbar navbar-expand-lg hero-section">
        <div className='container p-2 d-flex align-items-center justify-content-between'>
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="img" style={{ width: "24%" }} />
          </Link>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
              {user ? (
                <li className="nav-item">
                  <button
                    className="btn btn-link nav-link"
                    style={{ cursor: "pointer" }}
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li className="nav-item"><Link className="nav-link" to="/signup">SignUp</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                </>
              )}
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/product">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pricing">Pricing</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
            </ul>
          </div>

          {/* Hamburger Menu (Dashboard) */}
          {user && (
            <div
              onClick={() => window.location.href = "https://main.dnhat8qvs6b5l.amplifyapp.com/"}
              style={{ cursor: "pointer", fontSize: "24px" }}
              title="Go to Dashboard"
            >
              &#9776;
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
