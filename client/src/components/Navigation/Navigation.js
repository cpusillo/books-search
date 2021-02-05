import React from 'react'
import { Navbar} from 'react-bootstrap'
import { FaBook } from 'react-icons/fa'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className="brand" href="#home">
            <FaBook className="blue" /> 
            <span className="red"> Google </span> 
            <span className="yellow">Book </span>
            <span className="green">Search </span>
            </Navbar.Brand>
        </Navbar>
        </div>
    )
}
