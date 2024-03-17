import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mb-3">
      <div className="container-fluid justify-content-center">
        <Link className="navbar-brand" to="/">
          <div className="h3 fw-bold">STOREMATE</div>
        </Link>
      </div>
    </nav>
  );
}
