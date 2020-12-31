import React, { Component } from 'react';
import AddForm from '../AddForm/AddForm';

export default class People extends Component {
  renderLine = () => {
    return this.props.line.map((ind,i) => <li key={btoa(ind + i)}>{ind}</li>);
  };
  render() {
    return (
      <div className="people-container">
        <h1>Add Your Name to the Adoption Queue:</h1>
        <p>Submit your name in the box below.</p>
        <p>You will be added to the end of the line.</p>
        <p>When you reach the top of the list, you will be </p>
        <p>shown the next available dog or cat to adopt!</p>
        <ul>{this.renderLine()} </ul>
        {!this.props.inLine && (
          <AddForm
            setInLine={this.props.setInLine}
            setPerson={this.props.setPerson}
            setLine={this.props.setLine}
            toggleCat={this.props.toggleCat}
          />
        )}
      </div>
    );
  }
}