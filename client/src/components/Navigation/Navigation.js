import React from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav} from 'react-bootstrap'
import { FaBook, FaSave } from 'react-icons/fa'

export default function Navigation() {
  
    return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand className="brand">
                  <Link
                    to="/"
                    className={
                      window.location.pathname === "/" || window.location.pathname === "/"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                  <FaBook className="blue" /> 
                  <span className="red"> Google </span> 
                  <span className="yellow">Book </span>
                  <span className="green">Search </span>
                  </Link>
                </Navbar.Brand>
                  <Nav className="ml-auto">
                    <Link id="RouterNavLink" to="/saved"><FaSave/></Link>
                  </Nav>
            </Navbar>
            )
}
