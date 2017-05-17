import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, Link, hashHistory } from 'react-router';

import { PuppiesList, KittiesList } from './AnimalsList';
import { SinglePuppy, SingleKitty } from './SingleAnimal';

class App extends Component {
  constructor () {
    super();
    this.state = {};
  }

  render () {
    return (
      <div>
        <h1>PUPPIES AND KITTIES AND CUTENESS OH MY</h1>
        <Link to="/puppies">Puppies</Link>
        <br />
        <Link to="/kitties">Kitties</Link>
        { this.props.children }
      </div>
    );
  }
}

function Home () {
  return <h2>Click on Puppies or Kitties above what are you waiting for</h2>;
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="home" />
      <Route path="home" component={ Home } />
      <Route path="puppies" component={PuppiesList} >
        <Route path=":id" component={ SinglePuppy } />
      </Route>
      <Route path="kitties" component={KittiesList} >
        <Route path=":id" component={ SingleKitty } />
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
