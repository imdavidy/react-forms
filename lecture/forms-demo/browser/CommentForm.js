import React, { Component } from 'react';
import axios from 'axios';

export default class CommentForm extends Component {
  constructor () {
    super();
    this.state = {
      commentInput: '',
      showComments: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    event.preventDefault();
    axios.post(`/api/puppies/${this.props.id}/comments`, {
      comment: this.state.commentInput
    })
    .then(res => res.data)
    .then(this.props.updateComments)
    .catch(console.log.bind(console));

    this.setState({ commentInput: '' });
  }

  handleChange (event) {
    this.setState({
      commentInput: event.target.value
    });
  }

  handleCheckBoxChange (event) {
    this.setState({
      showComments: event.target.checked
    });
    this.props.hideOrShowComments(event.target.checked);
  }

  render () {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" name="comment" value={ this.state.commentInput } onChange={ this.handleChange }/>
        <span>Show Comments</span>
        <input type="checkbox"
          checked={this.state.showComments}
          onChange={ this.handleCheckBoxChange }
        />
        <button type="submit" >Submit</button>
      </form>
    );
  }
}
