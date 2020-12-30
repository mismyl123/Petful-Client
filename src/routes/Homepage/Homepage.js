import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hompage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="page-container">
          <h1 className="welcome">Welcome to Petful Adoption Service</h1>
          <div className="process-container">
            <h2>How the Adoption Process Works:</h2>
            <p>
            We operate on a First in First out basis.
            We believe all pets should be loved and treasured equally.
            Cat person or dog person we don't care, our only rule is 
            that you wait your turn and adopt the next available pet of 
            your preference.
            </p>
            <h3>
              Bring home your best fried TODAY!! 
              <br />
              Click{' '}
              <Link className="adopt" to="/adoption">
                Adopt
              </Link>{' '}
              to begin the process!
            </h3>
          </div>
        </div>
      </div>
    );
  }
}