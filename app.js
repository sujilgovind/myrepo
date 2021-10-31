const express = require('express');
const PORT = 3002;
const app = express();

const server = app.listen(PORT, ()=>{
	const host = server.address().remoteAddress
	console.log('App listening to http://%s:%s',host,PORT) 
});
