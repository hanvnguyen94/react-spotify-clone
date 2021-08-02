import React, { useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ accessToken, trackUri }) {
	const [play, setPlay] = useState(false)

	useEffect(() => setPlay(true), [trackUri])
	if (!accessToken) return null
	return (
		<div>
			<SpotifyPlayer
				token={accessToken}
				showSaveIcon
				callback={(state) => {
					if (!state.isPlaying) setPlay(false)
				}}
				play={play}
				uris={trackUri ? [trackUri] : []}
				styles={{
					sliderHeight: 6,
					sliderHandleColor: 'white',
					sliderColor: '#22B954',
					trackArtistColor: '#c1c1c1',
					trackNameColor: '#000',
					loaderSize: 50,
					marginBottom: 10,
				}}
			/>
		</div>
	)
}
