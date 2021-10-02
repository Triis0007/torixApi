const http = require('http') 
const express = require('express')
const fs = require('fs')
const jsonApi = require('./views/api/api.js')
const app = express()
const server = http.createServer(app)

app.use(express.json());
app.use(express.static('public'));
app.use('/', express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('./views/index.html', null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Route not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
});
app.get('/releases/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('./views/site/releases.html', null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Route not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
});

app.get('/docs', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('./views/site/docs.html', null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Route not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
});

	app.get('/api/v1/', (req, res) => {
	return res.json(
		{
			code: '404', 
			message: 'Provide the link, example cat, shitpost, dog.'
		}
	)
	
});

app.get(`/api/v1/cat`, (req, res) => {
	return res.json(jsonApi.cat)
})

app.get('/discord', (req, res) => {
	res.redirect('https://discord.gg/tYqKFJaP8c')
})

app.get('/github', (req, res) => {
	res.redirect('https://github.com/Leoo027/torixApi')
})


const listener = server.listen(8000, function() {
	console.log('[ONLINE] API ligada na porta' + listener.address().port)
});

