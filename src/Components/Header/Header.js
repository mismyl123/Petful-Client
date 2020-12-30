import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons' 

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1 className="nav-header">
          <FontAwesomeIcon icon={faPaw} className="paw icon" color="black"/>
          <Link to="/">Adopt a Pet Today!!</Link>
          <FontAwesomeIcon icon={faPaw} className="paw icon" color="black"/>
        </h1>
        <nav>
          <Link to="/adoption" className="adopt-link">
          <FontAwesomeIcon icon={faPaw} className="paw icon" color="black"/>
            Adopt Now!
          <FontAwesomeIcon icon={faPaw} className="paw icon" color="black"/>

          </Link>
        </nav>
      </div>
    );
  }
}