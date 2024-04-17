import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link active" aria-current="page" href="#converter">
                Converter
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#time-diff">
                Time Difference
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#table-view">
                Table
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#utc">
                UTC
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" href="#ist">
                IST
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;