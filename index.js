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

	app.get('/endpoints', (req, res) => {
	return res.json(
		{
			cat: 'https://torix.bonee.xyz/api/v1/cat', 
			wallpapers: 'https://torix.bonee.xyz/api/v1/wallpapers',
      turtles: 'https://torix.bonee.xyz/api/v1/turtles',
		}
	)
	
});

app.get(`/api/v1/cat`, (req, res) => {
	return res.json(jsonApi.cat)
})

app.get(`/api/v1/wallpapers`, (req, res) => {
	return res.json(jsonApi.wallpapers)
})

app.get(`/api/v1/turtles`, (req, res) => {
	return res.json(jsonApi.turtles)
})

app.get(`/api/v1/dog`, (req, res) => {
	return res.json(jsonApi.dog)
})

//anime

app.get(`/api/v1/anime/01`, (req, res) => {
	return res.json(jsonApi.kurosawa)
})

app.get(`/api/v1/anime/02`, (req, res) => {
	return res.json(jsonApi.neneAlkastone)
})

app.get(`/api/v1/anime/03`, (req, res) => {
	return res.json(jsonApi.chthollyNota)
})

app.get(`/api/v1/anime/04`, (req, res) => {
  return res.json(jsonApi.megumin)
})

app.get(`/api/v1/anime/05`, (req, res) => {
  return res.json(jsonApi.shinobuKochou)
})

app.get(`/api/v1/anime/06`, (req, res) => {
  return res.json(jsonApi.kanao)
})

app.get(`/api/v1/anime/07`, (req, res) => {
  return res.json(jsonApi.sakura)
})

app.get(`/api/v1/anime/08`, (req, res) => {
  return res.json(jsonApi.miku)
})

app.get(`/api/v1/anime/09`, (req, res) => {
  return res.json(jsonApi.kaguya)
})

app.get(`/api/v1/anime/10`, (req, res) => {
  return res.json(jsonApi.tenten)
})

app.get(`/api/v1/anime/11`, (req, res) => {
  return res.json(jsonApi.bulma)
})


//links
app.get('/discord', (req, res) => {
	res.redirect('https://discord.gg/tYqKFJaP8c')
})

app.get('/github', (req, res) => {
	res.redirect('https://github.com/Leoo027/torixApi')
})


const listener = server.listen(8000, function() {
	console.log('[ONLINE] API ligada na porta' + listener.address().port)
});
