import React from 'react'
import './Login.css'

const AUTH_URL =
	'https://accounts.spotify.com/authorize?client_id=12d199776a464ddf81299432a03ae8de&response_type=code&redirect_uri=http://localhost:3000/callback/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'

export default function Login() {
	return (
		<div className='login'>
			<img
				src='https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg'
				alt='Spotify logo'
			/>
			<a href={AUTH_URL}>LOGIN WITH SPOTIFY</a>
		</div>
	)
}
