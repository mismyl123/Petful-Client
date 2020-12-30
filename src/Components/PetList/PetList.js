import React, { Component } from 'react';
import PetfulApiService from '../../services/petful-api';
import Pet from '../Pet/Pet';

export default class PetList extends Component {
 
  renderError = () => {
    return <h1>Shelter is Empty!</h1>;
  };

  render() {
    return (
      <div className="pet-list">
        {this.props.cat.message ? (
          <div className="error">{this.renderError()}</div>
        ) : (
          <Pet
            title="Cat"
            key="Cat"
            toggleAdopt={this.props.toggleAdopt}
            dequeue={PetfulApiService.dequeueCats}
            adopt={this.props.adopt}
            pet={this.props.cat}
            getNextPet={this.props.getNextCat}
            handleShow={this.props.handleShow}
            setInLine={this.props.setInLine}
            setLine={this.props.setLine}
          />
        )}

        {this.props.dog.message ? (
          <div className="error">{this.renderError()}</div>
        ) : (
          <Pet
            title="Dog"
            key="Dog"
            toggleAdopt={this.props.toggleAdopt}
            dequeue={PetfulApiService.dequeueDogs}
            adopt={this.props.adopt}
            pet={this.props.dog}
            getNextPet={this.props.getNextDog}
            handleShow={this.props.handleShow}
            setInLine={this.props.setInLine}
            setLine={this.props.setLine}
          />
        )}
      </div>
    );
  }
}