import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand mx-4 px-4" href="#">
            {/* <img src="./images/eg-logo-edited.png" alt="" /> */}
            LOGO
            {/* EezeGo */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          {/* <span
            class="navbar-text"
            style={{
              color: "white",
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            Help
          </span> */}
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarText"
          >
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0  mx-4">
              <li class="nav-item ">
                <a
                  class="nav-link px-4"
                  href="/"
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link  px-4"
                  href="about"
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  About
                </a>
              </li>

              <li class="nav-item contact">
                <a
                  class="nav-link px-4"
                  href="services"
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  Services
                  <br />
                </a>
              </li>
              <li class="nav-item contact">
                <a
                  class="nav-link px-4"
                  href="contact"
                  style={{
                    color: "white",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  Contact-Us
                  <br />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
