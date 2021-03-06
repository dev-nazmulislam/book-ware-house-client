import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const location = useLocation();
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div>
      <div className="banner">
        <Navbar
          collapseOnSelect
          expand="lg"
          variant={`${navbar ? "light" : "dark"}`}
          className={`py-3 fixed-top  stocl ${navbar ? "navbg" : "navbgfalse"}`}
        >
          <Container>
            <Link
              className={`fw-bold fs-4 text-decoration-none ${
                navbar ? "text-dark" : "text-white"
              }`}
              to="/"
            >
              Book-house
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto text-center gap-4">
                <MenuItems />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {location.pathname !== "/" &&
        location.pathname !== "/home" &&
        location?.pathname.split("/").length !== 4 ? (
          <section className="py-4">
            <h1 className="text-light mt-5 text-center text-uppercase">
              {location.pathname.substr(1)}
            </h1>
            <p className="text-light text-center">
              <Link className="me-2" to="/">
                <AiFillHome />
              </Link>
              {location.pathname}
            </p>
          </section>
        ) : (
          <section className="py-5">
            <h1 className="text-light mt-5 text-center">
              Welcome to book Warehouse
            </h1>
            <p className="text-light text-center">
              Manage books stock easily & shine your life.
            </p>
            <button className="text-light btn btn-primary d-block mx-auto">
              Learn more
            </button>
          </section>
        )}
      </div>
    </div>
  );
};

export default Header;
