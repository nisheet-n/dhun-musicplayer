import React from 'react';

const Songs = ({ currentSong }) => {
	return (
		<div className="song-container">
			<img src={currentSong.cover} alt={currentSong.name} />
			<h1>{currentSong.name} </h1>
			<h2>{currentSong.artist} </h2>
		</div>
	);
};

export default Songs;