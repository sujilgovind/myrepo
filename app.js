const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

const PORT = 3002;

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

const ads = [
  {title: 'Hello World'}
];

app.get('/', (req, res) => {
  res.send(ads);
});

const server = app.listen(PORT, ()=>{
	const host = server.address().remoteAddress
	console.log('App listening to http://%s:%s',host,PORT) 
});

