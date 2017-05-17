import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class AnimalsList extends Component {
  constructor () {
    super();
    this.state = {
      animals: []
    };

    this.fetchAnimals = this.fetchAnimals.bind(this);
  }

  fetchAnimals (pluralName) {
    axios.get(`/api/${pluralName}`)
    .then(res => res.data)
    .then(animals => {
      this.setState({ animals });
    });
  }

  componentDidMount () {
    this.fetchAnimals(this.props.pluralName);
  }

  render () {
    return (
      <div>
        <h2>{`${this.props.pluralName.slice(0, 1).toUpperCase()}${this.props.pluralName.slice(1)}`} List</h2>
        <ul>
          { this.state.animals.map(animal =>
            <li key={animal.id}>
              <Link to={`/${this.props.pluralName}/${animal.id}`}>{animal.name}</Link>
            </li>
          )}
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export function PuppiesList ({ children }) {
  return (
    <div>
      <AnimalsList pluralName="puppies" />
      { children }
    </div>
  );
}

export function KittiesList ({ children }) {
  return (
    <div>
      <AnimalsList pluralName="kitties" />
      { children }
    </div>
  );
}
