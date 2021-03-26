import React, { useState } from 'react';
import useSound from 'use-sound';
import gulp from '../../assets/sound/gulp.mp3';
import ahhh from '../../assets/sound/ahhh.mp3';

const Nav = () => {
	const [playbackRate, setPlaybackRate] = useState(0.75);
	const [playGulp] = useSound(gulp, { playbackRate, volume: 0.5 });
	const [playAhhh] = useSound(ahhh, { volume: 0.5 });
	const [gulpClick, setGulpClick] = useState(0);

	const logoClick = () => {
		setGulpClick(gulpClick + 1);

		if (gulpClick < 10) {
			setPlaybackRate(playbackRate + 0.1);
			playGulp();
		} else if (gulpClick === 10) {
			playAhhh();

			setTimeout(() => {
				setGulpClick(0);
				setPlaybackRate(0.75);
			}, 3000);
		} else {
			return false;
		}
	};

	return (
		<div id='top-nav' className='nav'>
			<div className='nav-brand'>
				<button
					className='logo-btn'
					value={gulpClick}
					onClick={logoClick}>
					<span className='snug'>Snug</span>{' '}
					<i className='far fa-heart heart'></i>{' '}
					<span className='tea'>Tea</span>
				</button>
			</div>
		</div>
	);
};

export default Nav;
