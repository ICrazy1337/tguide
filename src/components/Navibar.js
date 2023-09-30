import React, {useState} from 'react'
import { Navbar, Nav, Link, Button } from 'react-bootstrap'
import { Link as L} from 'react-router-dom'

function Navibar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className="ms-2">TGuide</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><L to="/">Home</L></Nav.Link>
            <Nav.Link><L to="/users">Users</L></Nav.Link>
            <Nav.Link><L to="/about">About</L></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Navibar;