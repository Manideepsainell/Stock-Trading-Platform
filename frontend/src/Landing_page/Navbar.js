import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './SignUp/AuthContext';

function Navbar() {
  const { user, logout, flash } = useContext(AuthContext);

  return (
    <>
      {/* Flash Message (Independent Layer) */}
   {flash && (
  <div style={{
    position: "fixed",
    top: "15px",
    left: "20px",
    background: "rgba(33, 150, 243, 0.35)", // Lighter Zerodha blue, more transparent
    color: "#ffffff",
    padding: "16px 36px", // Slightly reduced for balance
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    fontSize: "15px",
    fontWeight: "500",
    zIndex: 1050,
    minWidth: "480px",
    textAlign: "left",
    letterSpacing: "0.2px",
    backdropFilter: "blur(6px)", // More glassy feel
    border: "1px solid rgba(255,255,255,0.15)" // Subtle border for definition
  }}>
    {flash}
  </div>
)}


      <nav className="navbar navbar-expand-lg hero-section">
        <div className='container p-2'>
          <Link className="navbar-brand" to="/">
            <img src="media/images/logo.svg" alt="img" style={{ width: "24%" }} />
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">SignUp</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">Support</Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
