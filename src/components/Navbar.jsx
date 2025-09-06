import { Link } from "react-router-dom";
import Logo from "../assets/images/bus.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Bootstrap" width="40" height="100%" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/bus-seat-selection">
                  Bus Seat Selection
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/payments">
                  Payments
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Dashboard">
                  BackHome
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
