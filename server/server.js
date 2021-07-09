const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
	const spotifyApi = new SpotifyWebApi({
		redirectUri: 'http://localhost:3000',
		clientId: '5d69b4331ad54c85a9e6a91e4a89dff6',
		clientSecret: '66a387a0c2e94f75ac9eae4d9bf69e05',
	})
})
