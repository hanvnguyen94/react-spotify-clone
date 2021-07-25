const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
	const refreshToken = req.body.refreshToken
	const spotifyApi = new SpotifyWebApi({
		redirectUri: 'http://localhost:3000/callback/',
		clientId: '12d199776a464ddf81299432a03ae8de',
		clientSecret: 'c14f320c2c454e61a1a25775737223b4',
		refreshToken,
	})

	spotifyApi
		.refreshAccessToken()
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			})

			// Save the access token so that it's used in future calls
			// spotifyApi.setAccessToken(data.body['access_token'])
		})
		.catch((err) => {
			console.log(err)
			res.sendStatus(400)
		})
})

app.post('/login', (req, res) => {
	const code = req.body.code

	const spotifyApi = new SpotifyWebApi({
		redirectUri: 'http://localhost:3000/callback/',
		clientId: '12d199776a464ddf81299432a03ae8de',
		clientSecret: 'c14f320c2c454e61a1a25775737223b4',
	})

	spotifyApi
		.authorizationCodeGrant(code)
		.then((data) => {
			res.json({
				accessToken: data.body.access_token,
				refreshToken: data.body.refresh_token,
				expiresIn: data.body.expires_in,
			})
		})
		.catch((err) => {
			console.log(err)
			res.sendStatus(400)
		})
})

app.listen(3001)
