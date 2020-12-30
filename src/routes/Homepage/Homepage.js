import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons' 



export default class Hompage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="page-container">
          <h1 className="welcome">Petful FIFO Adoption Center</h1>
          <div className="process-container">
            <h2>
            <FontAwesomeIcon icon={faPaw} className="paw icon" color="black"/>
            Thank You For Visiting Our Center!
            <FontAwesomeIcon icon={faPaw} className="paw icon" color="black"/>
            </h2>
            <p>How we work: We operate on a First in First out basis.</p>
           <p>We believe all pets should be loved and treasured equally.</p>
           <p>Cat person or dog person we don't care, our only rule is</p>
           <p>that you wait your turn and adopt the next available pet of</p> 
           <p>your preference.</p>
            <h3>
              Bring home your best fried TODAY!! 
              <br />
              Click{' '}
              <Link className="adopt" to="/adoption">
                Adopt
              </Link>{' '}
              to meet your new best friend!
            </h3>
          </div>
        </div>
      </div>
    );
  }
}