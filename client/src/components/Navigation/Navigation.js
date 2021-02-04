import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FaBook } from 'react-icons/fa'

export default function Navigation() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand className="mx-auto brand" href="#home">
            <FaBook class="blue" /> 
            <span class="red"> Google </span> 
            <span class="yellow">Book </span>
            <span class="green">Search </span>
            </Navbar.Brand>
        </Navbar>
        </div>
    )
}
