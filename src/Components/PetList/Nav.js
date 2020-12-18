import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons' 
import './Nav.css'

export default function Nav() {
  return (
    <nav role="navigation" className="nav-bar">
      <Link to={'/'} className="link">
        <FontAwesomeIcon icon={faPaw} className="cat icon" color="black"/>
        <h1>Petful</h1>
        <FontAwesomeIcon icon={faPaw} className="dog icon" color="black"/>
      </Link>
    </nav>
  )
}