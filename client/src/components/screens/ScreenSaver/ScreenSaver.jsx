import './ScreenSaver.css';

import { Link } from 'react-router-dom';

function ScreenSaver() {
	return (
		<div id="screen-saver-container" className="full-screen-container">
			<div id="screen-saver-inner" className="full-screen-inner">
				<div className="padding">
					<Link to="/">
						<video id="gallerymovie" width="1920" height="1080" loop="loop" autoPlay="autoPlay" muted="muted">
							<source src="/movie/CH_B_roll.mp4" type="video/mp4" />
						</video>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ScreenSaver;