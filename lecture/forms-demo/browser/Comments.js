import React, { Component } from 'react';
import CommentForm from './CommentForm';

export default class Comments extends Component {
  constructor (props) {
    super(props);
    this.state = {
      comments: props.animal.comments,
      shouldShow: true
    };

    this.updateComments = this.updateComments.bind(this);
    this.hideOrShowComments = this.hideOrShowComments.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.animal.id !== nextProps.animal.id) {
      this.setState({
        comments: nextProps.animal.comments
      });
    }
  }

  hideOrShowComments (shouldShow) {
    this.setState({shouldShow});
  }

  updateComments (comments) {
    this.setState({ comments });
  }

  render() {
    const comments = this.state.comments;
    return (
      <div>
        <h3>Comments</h3>
        <ul>
          {
            this.state.shouldShow && comments && comments.map(
              (comment, idx) => <li key={ idx }>{ comment }</li>
            )
          }
        </ul>
        <CommentForm
          hideOrShowComments={this.hideOrShowComments}
          updateComments= {this.updateComments}
          id={this.props.animal.id}
        />
      </div>
    );
  }
}
