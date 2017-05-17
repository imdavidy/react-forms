const express = require('express');
const app = express();

const volleyball = require('volleyball');
app.use(volleyball);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../browser/index.html'));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../browser/bundle.js'));
});

const puppies = [{
  id: 1,
  name: 'Taylor',
  image: 'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
}, {
  id: 2,
  name: 'Reggie',
  image: 'http://images.shape.mdpcdn.com/sites/shape.com/files/styles/slide/public/puppy-2_0.jpg'
}, {
  id: 3,
  name: 'Christian',
  image: 'https://www.askideas.com/media/19/Papillon-Puppy-Looking.jpg'
}, {
  id: 4,
  name: 'Jessie',
  image: 'http://www.101dogbreeds.com/wp-content/uploads/2015/10/Chi-Spaniel-Puppy-Pictures.jpg'
}, {
  id: 5,
  name: 'Pandora',
  image: 'http://4.bp.blogspot.com/-3JeIxWBU7bY/UKjIt8lVpCI/AAAAAAAABx8/YM8piSOwczs/s1600/Schipperke-Puppy.jpg'
}];

const kitties = [{
  id: 1,
  name: 'Toby',
  image: 'http://placekitten.com/g/401/401'
}, {
  id: 2,
  name: 'Thaddeus',
  image: 'http://placekitten.com/g/402/402'
}, {
  id: 3,
  name: 'Bella',
  image: 'http://placekitten.com/g/403/403'
}, {
  id: 4,
  name: 'Tiger',
  image: 'http://placekitten.com/g/400/400'
}, {
  id: 5,
  name: 'Oliver',
  image: 'http://placekitten.com/g/404/404'
}];

app.get('/api/puppies', function (req, res) {
  res.json(puppies);
});

app.get('/api/kitties', function (req, res) {
  res.json(kitties);
});

app.get('/api/puppies/:id', function (req, res) {
  const aPuppy = puppies.find(p => p.id == req.params.id);
  if (!aPuppy) res.sendStatus(404);
  else res.json(aPuppy);
});

app.post('/api/puppies/:id/comments', (req, res) => {
  const aPuppy = puppies.find(p => p.id == req.params.id);
  if (!aPuppy) res.sendStatus(404);
  aPuppy.comments = aPuppy.comments || [];
  aPuppy.comments.push(req.body.comment);
  res.json(aPuppy.comments);
});

app.get('/api/kitties/:id', function (req, res) {
  const aKitten = kitties.find(k => k.id == req.params.id);
  if (!aKitten) res.sendStatus(404);
  else res.json(aKitten);
});

app.post('/api/kitties/:id/comments', (req, res) => {
  const aKitty = kitties.find(p => p.id == req.params.id);
  if (!aKitty) res.sendStatus(404);
  aKitty.comments = aKitty.comments || [];
  aKitty.comments.push(req.body.comment);
  res.json(aKitty.comments);
});

app.listen(3000, () => console.log('listening on port 3000'));
