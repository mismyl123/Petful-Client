import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Hompage extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="page-container">
          <h1 className="welcome">Petful FIFO Adoption Center</h1>
          <div className="process-container">
            <h2>Thank You For Visiting Our Center!</h2>
            <p>
            How we work: We operate on a First in First out basis.
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
              to meet your new best friend!
            </h3>
          </div>
        </div>
      </div>
    );
  }
}