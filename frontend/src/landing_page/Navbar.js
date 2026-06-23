import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
  className="navbar navbar-expand-lg border-bottom"
  style={{ backgroundColor: "#FFF" }}
>
  <div className="container p-2">
    <Link className="navbar-brand" to="/">
      <div className="d-flex align-items-center">
        <img
          src="media/images/12.jpeg"
          style={{
            width: "38px",
            height: "38px",
            objectFit: "contain"
          }}
          alt="logo"
        />
        <span
          style={{
            marginLeft: "8px",
            fontWeight: "600",
            fontSize: "22px"
          }}
        >
          InvestEdge
        </span>
      </div>
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      {/* ms-auto pushes right */}
      <ul className="navbar-nav ms-auto mb-lg-0">

        <li className="nav-item">
          <Link className="nav-link active" to="/signup">
            Signup
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/about">
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/pricing">
            Pricing
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" to="/support">
            Support
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
