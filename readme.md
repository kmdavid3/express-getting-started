#Learning Express

## Getting started
	for getting started you need to download install express withing the command `npm i express`
	then the minimalist code your express application is
  ````javascript
		const express = require('express'); // import the express library
		const app = express(); // initialise the express app you're going the use
		/*
			then here you can  add some functions, for example : 
			app.get('/getName', (req, res) => console.log('i recevied this {req} and returning this {res}'))
		*/
		app.listen(3000, () => console.log('my app started')); // start your, app by specifing the port your app is going to use, you can add a callback function after the listening started.
	```