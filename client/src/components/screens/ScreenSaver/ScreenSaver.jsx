import './ScreenSaver.css';

import { Link } from 'react-router-dom';

function ScreenSaver() {
	return (
		<Link to="/">
			<video id="gallerymovie" width="1920" height="1080" loop="loop" autoPlay="autoPlay" muted="muted">
				<source src="https://neilsondigital1.com/ch_touch/movie/CH_B_roll.mp4" type="video/mp4" />
			</video>
		</Link>
	);
}

export default ScreenSaver;