import React, { useState } from 'react';
import useSound from 'use-sound';
import gulp from '../../assets/sound/gulp.mp3';
import ahhh from '../../assets/sound/ahhh.mp3';

const Nav = () => {
	const [playbackRate, setPlaybackRate] = useState(0.75);
	const [playGulp] = useSound(gulp, { playbackRate, volume: 0.5 });
	const [playAhhh] = useSound(ahhh, { volume: 0.5 });
	const [gulpClick, setGulpClick] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	}

	const handleClick = () => {
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
					onClick={handleClick}>
					<span className='snug'>Snug</span>{' '}
					<i className='far fa-heart heart'></i>{' '}
					<span className='tea'>Tea</span>
				</button>
			</div>
			<div className="nav-toggle">
				<button onClick={handleToggle}>
					{isOpen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
				</button>
			</div>
			<div className={`nav-menu ${isOpen ? 'show' : 'hide'}`}>
				<div className="nav-menu-item">
					<a href="#!">
						Home
					</a>
				</div>
				<div className="nav-menu-item">
					<a href="#!">
						Products
					</a>
				</div>
				<div className="nav-menu-item">
					<a href="#!">
						About
					</a>
				</div>
				<div className="nav-menu-item">
					<a href="#!">
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Nav;
