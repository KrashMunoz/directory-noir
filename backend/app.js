const express = require('express');
const path = require('path');

const app = express();

// app.use((req, res, next) => {
//     console.log('first middleware');
//     next();
// });

// app.use((req, res, next) => {
//     res.send('hello from express!');
// });

app.use(express.static(__dirname + '/dist/directory-noir-app'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

module.exports = app;