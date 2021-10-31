const express = require('express');
const PORT = 3002;

const ads = [
  {title: 'Hello World'}
];

app.get('/', (req, res) => {
  res.send(ads);
});