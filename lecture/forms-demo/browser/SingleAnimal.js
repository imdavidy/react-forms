import React, { Component } from 'react';
import axios from 'axios';

import Comments from './Comments';

class SingleAnimal extends Component {
  constructor () {
    super();
    this.state = {
      animal: {}
    };

    this.fetchAnimal = this.fetchAnimal.bind(this);
  }

  fetchAnimal (id) {
    return axios.get(`/api/${this.props.pluralName}/${id}`)
    .then(res => res.data)
    .then(animal => this.setState({ animal }));
  }

  componentDidMount () {
    this.fetchAnimal(this.props.id);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.id !== nextProps.id) {
      this.fetchAnimal(nextProps.id);
    }
  }

  render () {
    return (
      <div>
        <div>
          <h4>{ this.state.animal.name }</h4>
          <img src={ this.state.animal.image } />
        </div>
        <div>
          <Comments animal={ this.state.animal }/>
        </div>
      </div>
    );
  }
}

export function SinglePuppy ({ params }) {
  const id = params.id;
  return <SingleAnimal pluralName="puppies" id={id}/>;
}

export function SingleKitty ({ params }) {
  const id = params.id;
  return <SingleAnimal pluralName="kitties" id={id}/>;
}
